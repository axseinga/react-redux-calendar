import React from "react";
import StyledCalendarList from "./styled/CalendarList.styled";
import CalendarListItem from "./CalendarListItem";

const CalendarList = (props) => {
    const { meetings } = props;

    const renderMeetingsList = () => {
        return meetings.map((item) => renderMeetingsItem(item));
    };

    const renderMeetingsItem = (itemData) => {
        return (
            <CalendarListItem
                meetings={meetings}
                getId={props.getId}
                itemData={itemData}
                key={itemData.id}
            />
        );
    };

    return (
        <StyledCalendarList isEditing={props.isEditing}>
            <ul>{renderMeetingsList()}</ul>
        </StyledCalendarList>
    );
};

export default CalendarList;
