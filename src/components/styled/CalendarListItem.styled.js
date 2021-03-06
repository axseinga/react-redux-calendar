import styled, { css } from "styled-components";

const StyledCalendarListItem = styled.li`
    height: 50px;
    padding: 1rem;
    margin: 0.5rem 1rem;
    border-radius: 10px;
    color: #3a4456;
    background: linear-gradient(315deg, #a6b8da, #c5daff);
    box-shadow: inset -5px -5px 15px #8391ac, inset 5px 5px 15px #edffff;

    & div:first-child {
        display: flex;
        justify-content: space-between;
    }

    & a {
        margin-left: 0.5rem;
        color: black;
        text-decoration: none;

        &:hover,
        &:active {
            text-decoration: underline;
        }
    }

    & div {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        & button {
            margin-left: 0.5rem;
            margin-top: 0.2rem;
            color: #082413;
            padding: 0.2rem 0.4rem;
            border-radius: 15px;
            border: none;
            background: linear-gradient(45deg, #cacaca, #f0f0f0);
            box-shadow: 20px -20px 60px #bebebe, -20px 20px 60px #ffffff;
            cursor: pointer;

            &:hover,
            &:active {
                box-shadow: inset 5px 5px 6px #d6d9dd,
                    inset -5px -5px 6px #fcffff;
            }
        }
    }
`;

export default StyledCalendarListItem;
