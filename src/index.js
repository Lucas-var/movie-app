// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';




// ReactDOM.render(<App />, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom/client";
import Index1 from "./Index1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Index1 />
    </React.StrictMode>
);