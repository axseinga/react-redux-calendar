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

export const deleteMeetingAction = (meetings, id) => {
    return {
        type: "deleteMeeting",
        payload: { meetings, id },
    };
};

export const updateMeetingAction = (updatedMeeting) => {
    return {
        type: "updateMeeting",
        payload: { updatedMeeting },
    };
};
