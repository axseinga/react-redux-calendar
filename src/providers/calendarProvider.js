import { loadMeetingsAction, saveMeetingAction } from "../actions/calendar";

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
                console.log(resp);
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
                console.log(meetingData);
                dispatch(saveMeetingAction(meetingData));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

/*class meetingsAPI {
    constructor(loadMeetings, saveMeeting) {
        this.loadMeetings = loadMeetings;
        this.saveMeeting = saveMeeting;
    }

    apiUrl = "http://localhost:3005/meetings";

    load() {
        fetch(this.apiUrl)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }

                throw new Error("Network error!");
            })
            .then((resp) => {
                this.loadMeetings(resp);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    send = (meetingData) => {
        fetch(this.apiUrl, {
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
                console.log(meetingData);
                this.saveMeeting(meetingData);
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

export default meetingsAPI;*/
