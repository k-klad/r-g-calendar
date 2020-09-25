import React from "react";
import { gapi } from "gapi-script";

export default class GetEvents {

    state = {
        events: []
    };

    CALENDAR_ID = 'mdcuugrv93tat1m7pgibss7ua8@group.calendar.google.com';
    GOOGLE_API_KEY = 'AIzaSyDvDTtByfBOEcKAQnBcDaYi-S426Bed4DY';


    start = () => {

        const { events } = this.state;

        gapi.client.init({
            'apiKey': this.GOOGLE_API_KEY
        }).then(function() {
            return gapi.client.request({
                'path': `https://www.googleapis.com/calendar/v3/calendars/${(this.CALENDAR_ID)}/events`,
            })
        }).then( (response) => {
            let events = response.result.items
            this.setState({
                events
            }, ()=>{
                console.log(this.state.events);
            })
        }, function(reason) {
            console.log(reason);
        });
        gapi.load('client');
    }

}