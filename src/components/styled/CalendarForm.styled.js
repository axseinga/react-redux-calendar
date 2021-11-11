import styled from "styled-components";

const StyledCalendarForm = styled.div`
    width: 40%;
    min-height: min-content;
    height: 550px;
    padding: 1rem;
    border-radius: 20px;
    box-shadow: inset 5px 5px 10px #b0b1b4, inset -5px -5px 10px #ffffff;

    & label {
        & input {
            margin: 0.5rem;
            width: 90%;
            height: 30px;
            border: none;
            background: #e9ecf0;
            box-shadow: inset 5px 5px 6px #d6d9dd, inset -5px -5px 6px #fcffff;
        }
    }

    & div:last-child {
        display: flex;
        justify-content: center;
        & > input {
            width: 80px;
            height: 30px;
            color: #082413;
            border-radius: 15px;
            margin-top: 0.3rem;
            border: none;
            background: linear-gradient(315deg, #a6b8da, #c5daff);
            box-shadow: inset -5px -5px 15px #8391ac, inset 5px 5px 15px #edffff;
            &:active,
            &:hover {
                box-shadow: inset 5px 5px 6px #96a6c2,
                    inset -5px -5px 6px #f4ffff;
            }
        }
    }

    & ul {
        list-style: circle;
        background: linear-gradient(315deg, #a6b8da, #c5daff);
        box-shadow: inset 5px 5px 6px #96a6c2, inset -5px -5px 6px #f4ffff;

        & li {
            padding: 0.3rem;
        }
    }
`;

export default StyledCalendarForm;
