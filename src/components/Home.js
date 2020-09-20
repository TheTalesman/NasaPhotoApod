import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';




class Home extends Component {
    onChange = date => {
        if (date > new Date()) {
            alert('Future time travel is still not available! Choose today or some day in the past')
        } else {
            this.setState({ date })
        }

    }
    state = {
        date: new Date(),
    }




    render() {
        return (
            <div className="home">
                <div className="clear" >
                    <p>Choose a day or just click the button to see the picture of the day!</p>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                    <br className="clear" />

                    <Link className="home-link" to={
                        {
                            pathname: "/nasaphoto",
                            state: this.state
                        }
                    }
                    >Take me up above!</Link>
                </div>
            </div >
        );
    }
}


export default Home;
