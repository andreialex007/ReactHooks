import React, {useState} from 'react';
import FunctionContextComponent from "./UseContext/FunctionContextComponent";
import { ThemeProvider } from "./UseContext/ThemeContext";

function UseContext() {

    return (
        <ThemeProvider>
            <FunctionContextComponent />
        </ThemeProvider>
    );
}

export default UseContext;
