import React, { useState } from "react";

const CalendarForm = (props) => {
    const initForm = {
        firstName: "",
        lastName: "",
        email: "",
        date: "",
        time: "",
        errors: [],
    };
    const [form, setForm] = useState(initForm);

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm();
        setForm({ ...form, errors: errors });

        if (errors.length === 0) {
            saveMeeting();
            clearFormFields();
        }
    };

    const validateForm = () => {
        const errors = [];

        if (!isDateCorrect()) {
            errors.push("Popraw wprowadzoną datę");
        }

        if (!isTimeCorrect()) {
            errors.push("Popraw wprowadzoną godiznę");
        }

        if (!isFirstNameCorrect()) {
            errors.push("Wprowadź imię");
        }

        if (!isLastNameCorrect()) {
            errors.push("Wprowadż nazwisko");
        }

        if (!isEmailCorrect()) {
            errors.push("Wprowadź poprawny adres email");
        }

        return errors;
    };

    const isDateCorrect = () => {
        const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

        return pattern.test(form.date);
    };

    const isTimeCorrect = () => {
        const pattern = /^[0-9]{2}:[0-9]{2}$/;

        return pattern.test(form.time);
    };

    const isFirstNameCorrect = () => {
        return form.firstName.length > 0;
    };

    const isLastNameCorrect = () => {
        return form.lastName.length > 0;
    };

    const isEmailCorrect = () => {
        const pattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

        return pattern.test(form.email);
    };

    const handleFieldChange = (e) => {
        if (isFieldNameCorrect(e.target.name)) {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };

    const saveMeeting = () => {
        const { saveMeeting } = props;

        if (typeof saveMeeting === "function") {
            saveMeeting(getFieldsData());
        }
    };

    const clearFormFields = () => {
        const fieldsData = getFieldsData();
        for (const prop in fieldsData) {
            fieldsData[prop] = "";
        }

        setForm(fieldsData);
    };

    const getFieldsData = () => {
        const fieldsData = Object.assign({}, form);
        delete fieldsData["errors"];

        return fieldsData;
    };

    const isFieldNameCorrect = (name) => {
        const fieldsData = getFieldsData();

        return typeof fieldsData[name] !== "undefined";
    };

    const renderErrors = () => {
        if (form.errors) {
            return form.errors.map((err, index) => <li key={index}>{err}</li>);
        }
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <ul>{renderErrors()}</ul>
            <div>
                <label>
                    Data:{" "}
                    <input
                        name="date"
                        onChange={handleFieldChange}
                        value={form.date}
                        placeholder="RRRR-MM-DD"
                    />
                </label>
            </div>
            <div>
                <label>
                    Godzina:{" "}
                    <input
                        name="time"
                        onChange={handleFieldChange}
                        value={form.time}
                        placeholder="HH:MM"
                    />
                </label>
            </div>

            <div>
                <label>
                    Imię:{" "}
                    <input
                        name="firstName"
                        onChange={handleFieldChange}
                        value={form.firstName}
                    />
                </label>
            </div>
            <div>
                <label>
                    Nazwisko:{" "}
                    <input
                        name="lastName"
                        onChange={handleFieldChange}
                        value={form.lastName}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:{" "}
                    <input
                        name="email"
                        onChange={handleFieldChange}
                        value={form.email}
                        placeholder="nazwa@poczty.pl"
                    />
                </label>
            </div>
            <div>
                <input type="submit" value="zapisz" />
            </div>
        </form>
    );
};

export default CalendarForm;

/*class CalendarForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
        errors: [],
    }

    render() {
        return (
            <form action="" onSubmit={ this.handleSubmit }>
                <ul>{ this.renderErrors() }</ul>
                <div>
                    <label>
                        Data: <input 
                            name="date" 
                            onChange={ this.handleFieldChange } 
                            value={ this.state.date } 
                            placeholder="RRRR-MM-DD"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Godzina: <input 
                            name="time" 
                            onChange={ this.handleFieldChange } 
                            value={ this.state.time } 
                            placeholder="HH:MM"
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Imię: <input 
                            name="firstName" 
                            onChange={ this.handleFieldChange } 
                            value={ this.state.firstName } 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Nazwisko: <input 
                            name="lastName" 
                            onChange={ this.handleFieldChange } 
                            value={ this.state.lastName } 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email: <input 
                            name="email" 
                            onChange={ this.handleFieldChange } 
                            value={ this.state.email } 
                            placeholder="nazwa@poczty.pl"
                        />
                    </label>
                </div>
                <div><input type="submit" value="zapisz" /></div>
            </form>
        )
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validateForm();
        this.setState({
            errors,
        });

        if(errors.length === 0) {
            this.saveMeeting();
            this.clearFormFields();
        }
    }

    validateForm() {
        const errors = [];

        if(!this.isDateCorrect()) {
            errors.push('Popraw wprowadzoną datę');
        }

        if(!this.isTimeCorrect()) {
            errors.push('Popraw wprowadzoną godiznę')
        }

        if(!this.isFirstNameCorrect()) {
            errors.push('Wprowadź imię');
        }

        if(!this.isLastNameCorrect()) {
            errors.push('Wprowadż nazwisko')
        }

        if(!this.isEmailCorrect()) {
            errors.push('Wprowadź poprawny adres email');
        }


        return errors;
    }

    isDateCorrect() {
        const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

        return pattern.test(this.state.date);
    }

    isTimeCorrect() {
        const pattern = /^[0-9]{2}:[0-9]{2}$/
        
        return pattern.test(this.state.time);
    }

    isFirstNameCorrect() {
        return this.state.firstName.length > 0;
    }

    isLastNameCorrect() {
        return this.state.lastName.length > 0;
    }

    isEmailCorrect() {
        const pattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

        return pattern.test(this.state.email);
    }

    handleFieldChange = e => {
        if(this.isFieldNameCorrect(e.target.name)) {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    }

    saveMeeting() {
        const {saveMeeting} = this.props;

        if(typeof saveMeeting === 'function') {
            saveMeeting( this.getFieldsData() );
        }
    }

    clearFormFields() {
        const fieldsData = this.getFieldsData();
        for(const prop in fieldsData) {
            fieldsData[prop] = '';
        }

        this.setState(fieldsData);
    }

    getFieldsData() {
        const fieldsData = Object.assign({}, this.state);
        delete fieldsData['errors'];

        return fieldsData;
    }

    isFieldNameCorrect(name) {
        const fieldsData = this.getFieldsData();

        return typeof fieldsData[name] !== 'undefined';
    }

    renderErrors() {
        return this.state.errors.map( (err, index) => <li key={ index }>{ err }</li>);
    }
}

export default CalendarForm*/
