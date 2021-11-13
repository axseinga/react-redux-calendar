import {
    loadMeetingsAction,
    saveMeetingAction,
    deleteMeetingAction,
} from "../actions/calendar";

const apiUrl = "http://localhost:3005/meetings";

export const loadAPI = () => {
    return function thunk(dispatch, getState) {
        return fetch(apiUrl)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }

                throw new Error("Network error!");
            })
            .then((resp) => {
                dispatch(loadMeetingsAction(resp));
            })
            .catch((err) => {
                console.error(err);
            });
    };
};

export const sendAPI = (meetingData) => {
    return function thunk(dispatch, getState) {
        return fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(meetingData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }

                throw new Error("Network error!");
            })
            .then((meetingData) => {
                dispatch(saveMeetingAction(meetingData));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

/*export const updateAPI = (meetingData) => {
    return function thunk(dispatch, getState) {
        return fetch(apiUrl, {
            method: "PUT",
            body: JSON.stringify(meetingData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }

                throw new Error("Network error!");
            })
            .then((meetingData) => {
                //action for updating dispatch(saveMeetingAction(meetingData)); //
            })
            .catch((err) => {
                console.log(err);
            });
    };
};*/

export const deleteAPI = (meetings, id) => {
    return function thunk(dispatch, getState) {
        return fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
        })
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }

                throw new Error("Network error!");
            })
            .then((resp) => {
                dispatch(deleteMeetingAction(meetings, id)); //
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
