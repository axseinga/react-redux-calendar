import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendAPI } from "../providers/calendarProvider";

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

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm();
        setForm({ ...form, errors: errors });

        if (errors.length === 0) {
            dispatch(sendAPI(form));
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