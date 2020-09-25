import React, { Component } from "react";
import './app.css';
import GetEvents from "../../services/services-calendar/services-calendar";

export default class App extends Component {

    // componentDidMount = () => {
    //     this.GetEvents();
    // }


    render() {
        return (
            <div>
                <h1 className='h1'>Calendar</h1>
                <h2 className='h2'>September</h2>
            </div>
        );
    }
}