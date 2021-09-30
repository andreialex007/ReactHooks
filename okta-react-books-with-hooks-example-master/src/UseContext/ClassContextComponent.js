import React, {Component, useEffect, useRef, useState} from 'react';
import { ThemeContext } from "../UseContext";


export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render() {
        return (<ThemeContext.Consumer>
            {value => {
                return <div style={this.themeStyles(value)}>
                    Class Theme
                </div>
            }}
        </ThemeContext.Consumer>)
    }
}
