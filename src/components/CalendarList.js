import React from "react";
import StyledCalendarList from "./styled/CalendarList.styled";

const CalendarList = (props) => {
    const { meetings } = props;

    const renderMeetingsList = () => {
        return meetings.map((item) => renderMeetingsItem(item));
    };

    const renderMeetingsItem = (itemData) => {
        return (
            <li key={itemData.id}>
                {itemData.date} {itemData.time} =>
                <a href={`mailto: ${itemData.email}`}>
                    {itemData.name} {itemData.surname}
                </a>
            </li>
        );
    };

    return (
        <StyledCalendarList>
            <ul>{renderMeetingsList()}</ul>
        </StyledCalendarList>
    );
};

export default CalendarList;
