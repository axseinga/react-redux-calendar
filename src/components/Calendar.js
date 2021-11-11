import React, { useEffect } from "react";

import CalendarList from "./CalendarList";
import CalendarForm from "./CalendarForm";
import { useSelector, useDispatch } from "react-redux";
import { loadAPI } from "../providers/calendarProvider";

const Calendar = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAPI());
    }, []);

    const meetings = useSelector((state) => state.meetings);

    return (
        <section>
            <CalendarList meetings={meetings} />
            <CalendarForm/>
        </section>
    );
};

export default Calendar;

