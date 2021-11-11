import styled from "styled-components";

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

        & li {
            padding: 1rem;
            margin: 0.5rem 1rem;
            border-radius: 10px;
            color: #3a4456;
            background: linear-gradient(315deg, #a6b8da, #c5daff);
            box-shadow: inset -5px -5px 15px #8391ac, inset 5px 5px 15px #edffff;

            & a {
                margin-left: 0.5rem;
                color: black;
                text-decoration: none;

                &:hover,
                &:active {
                    text-decoration: underline;
                }
            }
        }
    }
`;

export default StyledCalendarList;
