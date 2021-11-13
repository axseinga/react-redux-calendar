import React from "react";
import useToggleState from "../hooks/useToggleState";
import StyledCalendarListItem from "./styled/CalendarListItem.styled";

const CalendarListItem = (props) => {
    const [isEditing, toggle] = useToggleState();
    return (
        <StyledCalendarListItem>
            {isEditing ? (
                <p>editing</p>
            ) : (
                <div>
                    <div>
                        {props.itemData.date} {props.itemData.time} =>
                        <a href={`mailto: ${props.itemData.email}`}>
                            {props.itemData.name} {props.itemData.surname}
                        </a>
                    </div>
                    <div>
                        <button onClick={toggle}>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            )}
        </StyledCalendarListItem>
    );
};

export default CalendarListItem;
