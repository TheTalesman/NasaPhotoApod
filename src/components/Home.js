import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { formatDate} from "../utils/date";


function tileDisabled ({date,view}) {
    
    date.setHours(0,0,0,0);

   
    
    
}
class Home extends Component {


    
    onChange = date => {
        if (date > new Date()){
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
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    tileDisabled={tileDisabled} />
                <br />
                <Link className="home-link" to={
                    {
                        pathname: "/nasaphoto",
                        state: this.state
                    }
                }
                >Take me up above!</Link>
            </div >
        );
    }
}


export default Home;
