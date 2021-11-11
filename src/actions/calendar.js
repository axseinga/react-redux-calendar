export const loadMeetingsAction = (meetings) => {
    return {
        type: "loadMeetings",
        payload: { meetings },
    };
};

export const saveMeetingAction = (newMeeting) => {
    return {
        type: "saveMeeting",
        payload: { newMeeting },
    };
};
