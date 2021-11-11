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
        default:
            return state;
    }
};

export default calendarReducer;
