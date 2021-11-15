import React, { useEffect, useState } from "react";

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

    const [meetingToUpdate, setMeetingToUpdate] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const getMeetingToUpdate = (id) => {
        const meeting = meetings.filter((meeting) => meeting.id === id);
        setMeetingToUpdate(meeting);
        setIsEditing(true);
    };

    return (
        <StyledCalendar>
            <h1>Calendar</h1>
            <div>
                <CalendarList meetings={meetings} getId={getMeetingToUpdate} />
                <CalendarForm
                    meetingToUpdate={meetingToUpdate}
                    isEditing={isEditing}
                />
            </div>
        </StyledCalendar>
    );
};

export default Calendar;
