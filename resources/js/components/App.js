import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom';
import Root from "./Root";

function App() {

    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    return (
    <BrowserRouter>
    <Root/>
    </BrowserRouter>
);
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

