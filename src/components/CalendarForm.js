import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendAPI } from "../providers/calendarProvider";
import StyledCalendarForm from "./styled/CalendarForm.styled";

const CalendarForm = (props) => {
    const initForm = {
        name: "",
        surname: "",
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
            const data = getFieldsData();
            dispatch(sendAPI(data));
            clearFormFields();
        }
    };

    const validateForm = () => {
        const errors = [];

        if (!isDateCorrect()) {
            errors.push("Please write correct date");
        }

        if (!isTimeCorrect()) {
            errors.push("Please write correct time");
        }

        if (!isFirstNameCorrect()) {
            errors.push("Add name");
        }

        if (!isLastNameCorrect()) {
            errors.push("Add surname");
        }

        if (!isEmailCorrect()) {
            errors.push("Please write correct email");
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
        return form.name.length > 0;
    };

    const isLastNameCorrect = () => {
        return form.surname.length > 0;
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

    const fields = [
        { name: "date", placeholder: "YYYY-MM-DD" },
        { name: "time", placeholder: "HH:MM" },
        { name: "name", placeholder: "" },
        { name: "surname", placeholder: "" },
        { name: "email", placeholder: "name@mail.to" },
    ];

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <StyledCalendarForm>
            <form action="" onSubmit={handleSubmit}>
                <ul>{renderErrors()}</ul>
                {fields.map((field) => (
                    <div key={field.name}>
                        <label>
                            {capitalize(field.name)}
                            <input
                                name={field.name}
                                onChange={handleFieldChange}
                                value={form[field.name]}
                                placeholder={field.placeholder}
                            />
                        </label>
                    </div>
                ))}
                <div>
                    <input type="submit" value="zapisz" />
                </div>
            </form>
        </StyledCalendarForm>
    );
};

export default CalendarForm;
