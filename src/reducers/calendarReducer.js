const initState = {
    meetings: [],
};

const calendarReducer = (state = initState, action) => {
    switch (action.type) {
        case "loadMeetings":
            return {
                meetings: action.payload.meetings,
            };
        case "saveMeeting":
            return {
                ...state,
                meetings: [...state.meetings, action.payload.newMeeting],
            };
        case "deleteMeeting":
            const { meetings, id } = action.payload;
            return {
                meetings: meetings.filter((meeting) => meeting.id !== id),
            };
        default:
            return state;
    }
};

export default calendarReducer;
