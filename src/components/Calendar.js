import React from "react";

import CalendarList from "./CalendarList";
import CalendarForm from "./CalendarForm";
import { connect } from "react-redux";
import { loadMeetingsAction, saveMeetingAction } from "../actions/calendar";
import meetingsAPI from "../providers/calendarProvider";

class Calendar extends React.Component {
    meetingsAPI = new meetingsAPI(
        this.props.loadMeetings,
        this.props.saveMeeting
    );

    componentDidMount() {
        this.meetingsAPI.load();
    }

    render() {
        return (
            <section>
                <CalendarList meetings={this.props.meetings} />
                <CalendarForm saveMeeting={this.meetingsAPI.send} />
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
