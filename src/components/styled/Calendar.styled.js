import styled from "styled-components";

const StyledCalendar = styled.section`
    width: 50vw;
    min-height: 700px;
    height: 80vh;
    background-color: #eaecf0;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 20px;
    box-shadow: inset 5px 5px 10px #b0b1b4, inset -5px -5px 10px #ffffff;

    & h1 {
        letter-spacing: 1.5rem;
    }

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`;

export default StyledCalendar;
