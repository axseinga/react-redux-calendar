import React from "react";
import { useDispatch } from "react-redux";
import { deleteAPI } from "../providers/calendarProvider";
import StyledCalendarListItem from "./styled/CalendarListItem.styled";

const CalendarListItem = (props) => {
    const dispatch = useDispatch();
    return (
        <StyledCalendarListItem>
            <div>
                <div>
                    {props.itemData.date} {props.itemData.time} =>
                    <a href={`mailto: ${props.itemData.email}`}>
                        {props.itemData.name} {props.itemData.surname}
                    </a>
                </div>
                <div>
                    <button
                        onClick={() => {
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
