import React from "react";

import CalendarList from "./CalendarList";
import CalendarForm from "./CalendarForm";
import { connect } from "react-redux";
import { loadMeetingsAction, saveMeetingAction } from "../actions/calendar";

class Calendar extends React.Component {
    apiUrl = "http://localhost:3005/meetings";

    state = {
        meetings: [],
    };

    loadMeetingsFromApi() {
        fetch(this.apiUrl)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }

                throw new Error("Network error!");
            })
            .then((resp) => {
                this.setState({
                    meetings: resp,
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    sendMeetingToApi = (meetingData) => {
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
                this.addMeetingToState(meetingData);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    addMeetingToState(meetingData) {
        this.setState({
            meetings: [...this.state.meetings, meetingData],
        });
    }

    componentDidMount() {
        this.loadMeetingsFromApi();
    }

    render() {
        return (
            <section>
                <CalendarList meetings={this.state.meetings} />
                <CalendarForm saveMeeting={this.sendMeetingToApi} />
            </section>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        meetings: state.meetings,
    };
};

const mapActionToProps = {
    loadMeetings: loadMeetingsAction,
    saveMeeting: saveMeetingAction,
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);
