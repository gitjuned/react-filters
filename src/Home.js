import React, { Component } from 'react'
// import './App.css'

class Home extends Component {
    state = {
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
        console.log("Checked block");
        if (event.target.checked) {

            let filteredElements = this.state.flights.filter(function (flight) {
                return flight.name === name
            })

            if (this.state.checkedAirLines.length === 0) {
                this.setState({
                    filteredData: [
                        ...filteredElements
                    ],
                })
            }
            else {
                this.setState({
                    filteredData: [
                        ...this.state.filteredData, ...filteredElements,
                    ],
                })
            }
            this.setState({ checkedAirLines: [...this.state.checkedAirLines, name] })

        } else {
            console.log("unchecked block");
            let filteredElements = this.state.filteredData.filter(function (flight) {
                return flight.name !== name
            })
            console.log(filteredElements)
            this.setState({
                filteredData: [
                    ...filteredElements
                ]
            })
        }
    }

    handleTimeChange = (e) => {
        this.setState({
            time: e.target.value
        })

    }

    handleTimeSort = (e) => {
        e.preventDefault();

        let time = this.state.time

        let filteredElements = this.state.filteredData.filter(function (flight) {
            return flight.duration >= time;
        })

        this.setState({
            filteredData: [
                ...filteredElements
            ],
        })

    }




    render() {

        return (
            <div>

                <div style={{ marginTop: '50px' }} className="filters">

                    <div className="sort-option checkboxes-wrapper">
                        <p>SORT BY AIRLINE</p>

                        <div>
                            <input
                                type="checkbox"
                                id="jet"
                                onChange={(event) => this.handleChange(event, "Jet Airways")} />

                            <label htmlFor="jet">Jet Airways</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="airindia"
                                onChange={(event) => this.handleChange(event, "Air India")} />

                            <label htmlFor="airindia">Air India</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="indigo"
                                onChange={(event) => this.handleChange(event, "Indigo")} />
                            <label htmlFor="indigo">Indigo</label>
                        </div>

                    </div>

                    <div className="sort-option time-wrapper">
                        <p>SORT BY TIME</p>

                        <form onSubmit={(e) => this.handleTimeSort(e)}>
                            <input type="text"
                                value={this.state.time}
                                onChange={this.handleTimeChange} />
                            <button>FILTER</button>
                        </form>

                    </div>

                    <div className="sort-option price-wrapper">
                        <p>SORT BY PRICE</p>
                        <form action="">
                            <input type="text" />
                            <button>FILTER</button>
                        </form>
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

export default Home
