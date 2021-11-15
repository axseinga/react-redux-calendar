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
            /*<li key={itemData.id}>
                    {itemData.date} {itemData.time} =>
                    <a href={`mailto: ${itemData.email}`}>
                        {itemData.name} {itemData.surname}
                    </a>
                    <div>
                        <button onClick={toggle}>Edit</button>
                        <button>Delete</button>
                    </div>
                </li>*/
        );
    };

    return (
        <StyledCalendarList>
            <ul>{renderMeetingsList()}</ul>
        </StyledCalendarList>
    );
};

export default CalendarList;
