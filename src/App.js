import React from "react";
import GlobalStyle from "./GlobalStyle";
import Calendar from "./components/Calendar";

class App extends React.Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Calendar />
            </>
        );
    }
}

export default App;
