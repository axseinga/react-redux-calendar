import styled, { css } from "styled-components";

const deactiveLiStyle = css`
    pointer-events: none;
    opacity: 0.6;
    filter: alpha(opacity=50);
`;

const StyledCalendarList = styled.div`
    width: 50%;
    min-height: 300px;
    height: min-content;
    border-radius: 20px;
    box-shadow: inset 5px 5px 10px #b0b1b4, inset -5px -5px 10px #ffffff;
    overflow: scroll;

    & > ul {
        list-style: none;
        padding-inline-start: 0;
    }

    ${(props) => props.isEditing && deactiveLiStyle}
`;

export default StyledCalendarList;
