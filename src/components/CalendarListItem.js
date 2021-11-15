import React from "react";
import { useDispatch } from "react-redux";
import useToggleState from "../hooks/useToggleState";
import { deleteAPI } from "../providers/calendarProvider";
import StyledCalendarListItem from "./styled/CalendarListItem.styled";

const CalendarListItem = (props) => {
    const [isEditing, toggle] = useToggleState();
    const dispatch = useDispatch();
    return (
        <StyledCalendarListItem isEditing={isEditing}>
            <div>
                <div>
                    {props.itemData.date} {props.itemData.time} =
                    <a href={`mailto: ${props.itemData.email}`}>
                        {props.itemData.name} {props.itemData.surname}
                    </a>
                </div>
                <div>
                    <button
                        onClick={() => {
                            toggle();
                            props.getId(props.itemData.id);
                        }}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() =>
                            dispatch(
                                deleteAPI(props.meetings, props.itemData.id)
                            )
                        }
                    >
                        Delete
                    </button>
                </div>
            </div>
        </StyledCalendarListItem>
    );
};

export default CalendarListItem;
