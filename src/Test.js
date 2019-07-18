import React, { Component } from 'react';
import './App.css';

class Test extends Component {
    state = {
        airLines: ["Jet Airways", "Air India", "Indigo"],
        flights: [
            {
                id: 1,
                name: "Jet Airways",
                duration: 100,
                price: 3400,
            },
            {
                id: 2,
                name: "Air India",
                duration: 120,
                price: 7300,

            },
            {
                id: 3,
                name: "Indigo",
                duration: 110,
                price: 5300,

            },
            {
                id: 4,
                name: "Indigo",
                duration: 140,
                price: 9000,

            },
            {
                id: 5,
                name: "Indigo",
                duration: 250,
                price: 4500,

            },
            {
                id: 6,
                name: "Air India",
                duration: 130,
                price: 3000,

            },
            {
                id: 7,
                name: "Air India",
                duration: 145,
                price: 2900,

            },
            {
                id: 8,
                name: "Jet Airways",
                duration: 140,
                price: 6400,

            },
        ],

        filteredData: [
            {
                id: 1,
                name: "Jet Airways",
                duration: 100,
                price: 3400,
            },
            {
                id: 2,
                name: "Air India",
                duration: 120,
                price: 7300,

            },
            {
                id: 3,
                name: "Indigo",
                duration: 110,
                price: 5300,

            },
            {
                id: 4,
                name: "Indigo",
                duration: 140,
                price: 9000,

            },
            {
                id: 5,
                name: "Indigo",
                duration: 250,
                price: 4500,

            },
            {
                id: 6,
                name: "Air India",
                duration: 130,
                price: 3000,

            },
            {
                id: 7,
                name: "Air India",
                duration: 145,
                price: 2900,

            },
            {
                id: 8,
                name: "Jet Airways",
                duration: 140,
                price: 6400,

            },
        ],

        checkedAirLines: [],

        time: "",

    }

    handleChange = (event, name) => {

        let filteredElements = []; //filtered array
        let filteredOldData = [...this.state.filteredData]; //local state
        let filteredData = []; //local state
        let time = this.state.time;

        let checkedFlights = [...this.state.checkedAirLines];

        if (checkedFlights.includes(name)) {
            console.log("Uncheck clicked");
            if (this.state.filteredData.length === 0) {
                console.log("insode 0");
                this.setState({ filteredData: filteredOldData })
            }
            let checkedAirline = checkedFlights.filter(function (airline) {
                return airline !== name
            })
            // FILTERING FLIGHTS
            filteredElements = this.state.filteredData.filter(function (flight) {
                return flight.name !== name
            })
        }// IF ENDS
        else {
            console.log("check clicked");
            console.log(checkedFlights.length, "checkedFlights");
            checkedFlights.push(name);
            for (let i = 0; i < checkedFlights.length; i++) {
                let filteredNewElements = this.state.flights.filter(function (flight) {
                    return flight.name === checkedFlights[i]
                })
                filteredElements = [...filteredElements, ...filteredNewElements]
            }
        }// ELSE ENDS

        if (this.state.time.length !== 0) {

            console.log("non zero block");
            console.log("filtered data", this.state.filteredData);

            filteredElements = filteredElements.filter(function (flight) {
                return flight.duration >= time;
            })
        }
        this.setState({
            filteredData: [...filteredElements],
            checkedAirLines: [...checkedFlights]
        }, () => {
            console.log(this.state.filteredData, "mahesh");
        });

    }

    handleTimeChange = (e) => {
        this.setState({
            time: e.target.value
        })

    }

    handleTimeSort = (e) => {
        e.preventDefault();

        // let time = this.state.time

        // let filteredElements = this.state.filteredData.filter(function (flight) {
        //     return flight.duration >= time;
        // })

        // this.setState({
        //     filteredData: [
        //         ...filteredElements
        //     ],
        // })

    }
    handleTimeClick = () => {
        console.log("button clicked");
        console.log(this.state.time);
        console.log(this.state.filteredData);
    }



    render() {

        return (
            <div>

                <div style={{ marginTop: '50px' }} className="filters">
                    <form action="">
                        <div className="sort-option checkboxes-wrapper">
                            <p>SORT BY AIRLINE</p>
                            {
                                this.state.airLines.map((airline, index) => (
                                    <div key={index}>
                                        <input
                                            type="checkbox"
                                            id={airline}
                                            onChange={(event) => this.handleChange(event, airline)}
                                            defaultChecked={this.state.checkedAirLines.includes(airline)}
                                        // checked={true}
                                        />
                                        <label htmlFor={airline}>{airline}</label>
                                    </div>
                                ))
                            }

                        </div>
                    </form>

                    <div className="sort-option time-wrapper">
                        <p>SORT BY TIME</p>

                        <input
                            type="text"
                            value={this.state.time}
                            onChange={this.handleTimeChange}
                        />

                        <input
                            type="button"
                            value="FILTER"
                            // onClick={this.handleTimeClick}
                            onClick={this.handleChange}
                        />

                    </div>

                    <div className="sort-option price-wrapper">
                        <p>SORT BY PRICE</p>
                        {/* <form action="">
                            <input type="text" />
                            <button>FILTER</button>
                        </form> */}
                    </div>

                </div>

                <div style={{ marginTop: '70px' }} className="flight-headings">
                    <h2>NAME</h2>
                    <h2>DURATION (mins)</h2>
                    <h2>PRICE</h2>
                </div>


                {this.state.filteredData.length === 0 ?
                    (<div className="flights">
                        {this.state.flights.map(flight => (
                            <div key={flight.id} className="flight-card">
                                <p> {flight.name} </p>
                                <p> {flight.duration} </p>
                                <p> {flight.price} </p>
                            </div>
                        ))}
                    </div>) :
                    (<div className="flights">
                        {this.state.filteredData.map(flight => (
                            <div key={flight.id} className="flight-card">
                                <p> {flight.name} </p>
                                <p> {flight.duration} </p>
                                <p> {flight.price} </p>
                            </div>
                        ))}
                    </div>)}

            </div>
        )
    }
}


export default Test
