export const loadMeetingsAction = async (meetings) => {
    return {
        type: "loadMeetings",
        payload: { meetings },
    };
};

export const saveMeetingAction = async (newMeeting) => {
    return {
        type: "saveMeeting",
        payload: { newMeeting },
    };
};
