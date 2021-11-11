import React from "react";

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
                    {itemData.firstName} {itemData.lastName}
                </a>
            </li>
        );
    };

    return <ul>{renderMeetingsList()}</ul>;
};

export default CalendarList;
