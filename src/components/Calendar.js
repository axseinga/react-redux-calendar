import React, { useEffect } from "react";

import CalendarList from "./CalendarList";
import CalendarForm from "./CalendarForm";
import { useSelector, useDispatch } from "react-redux";
import { loadAPI } from "../providers/calendarProvider";

import StyledCalendar from "./styled/Calendar.styled";

const Calendar = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAPI());
    }, []);

    const meetings = useSelector((state) => state.meetings);

    return (
        <StyledCalendar>
            <h1>Calendar</h1>
            <div>
                <CalendarList meetings={meetings} />
                <CalendarForm />
            </div>
        </StyledCalendar>
    );
};

export default Calendar;
