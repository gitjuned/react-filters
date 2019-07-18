import React, { Component } from "react";
import "./App.css";

class Sample extends Component {
  state = {
    airLines: ["Jet Airways", "Air India", "Indigo"],
    flights: [
      {
        id: 1,
        name: "Jet Airways",
        duration: 100,
        price: 3400
      },
      {
        id: 2,
        name: "Air India",
        duration: 120,
        price: 7300
      },
      {
        id: 3,
        name: "Indigo",
        duration: 110,
        price: 5300
      },
      {
        id: 4,
        name: "Indigo",
        duration: 140,
        price: 9000
      },
      {
        id: 5,
        name: "Indigo",
        duration: 250,
        price: 4500
      },
      {
        id: 6,
        name: "Air India",
        duration: 130,
        price: 3000
      },
      {
        id: 7,
        name: "Air India",
        duration: 145,
        price: 2900
      },
      {
        id: 8,
        name: "Jet Airways",
        duration: 140,
        price: 6400
      },
      {
        id: 9,
        name: "Jet Airways",
        duration: 240,
        price: 16400
      },
      {
        id: 10,
        name: "Air India",
        duration: 250,
        price: 14400
      },
      {
        id: 11,
        name: "Indigo",
        duration: 280,
        price: 17400
      },
      {
        id: 12,
        name: "Air India",
        duration: 250,
        price: 20400
      },
      {
        id: 13,
        name: "Jet Airways",
        duration: 350,
        price: 22400
      },
      {
        id: 14,
        name: "Air India",
        duration: 450,
        price: 30400
      },
      {
        id: 15,
        name: "Indigo",
        duration: 350,
        price: 21400
      }
    ],

    filteredData: [
      {
        id: 1,
        name: "Jet Airways",
        duration: 100,
        price: 3400
      },
      {
        id: 2,
        name: "Air India",
        duration: 120,
        price: 7300
      },
      {
        id: 3,
        name: "Indigo",
        duration: 110,
        price: 5300
      },
      {
        id: 4,
        name: "Indigo",
        duration: 140,
        price: 9000
      },
      {
        id: 5,
        name: "Indigo",
        duration: 250,
        price: 4500
      },
      {
        id: 6,
        name: "Air India",
        duration: 130,
        price: 3000
      },
      {
        id: 7,
        name: "Air India",
        duration: 145,
        price: 2900
      },
      {
        id: 8,
        name: "Jet Airways",
        duration: 140,
        price: 6400
      },
      {
        id: 9,
        name: "Jet Airways",
        duration: 240,
        price: 16400
      },
      {
        id: 10,
        name: "Air India",
        duration: 250,
        price: 14400
      },
      {
        id: 11,
        name: "Indigo",
        duration: 280,
        price: 17400
      },
      {
        id: 12,
        name: "Air India",
        duration: 250,
        price: 20400
      },
      {
        id: 13,
        name: "Jet Airways",
        duration: 350,
        price: 22400
      },
      {
        id: 14,
        name: "Air India",
        duration: 450,
        price: 30400
      },
      {
        id: 15,
        name: "Indigo",
        duration: 350,
        price: 21400
      }
    ],

    checkedAirLines: [],

    time: ""
  };

  handleChange = (event, name) => {
    let filteredElements = []; //filtered array
    let filteredElements2 = []; //filtered array for looping
    let filteredData = [this.state.flights]; //local state
    let time = 0;
    let checkedAirline = [];
    let checkedFlights = [...this.state.checkedAirLines];
    time = this.state.time;
    if (checkedFlights.includes(name)) {
      console.log("UNCHECKED, if block");

      // FILTERING CHECKED AIRLINE FLIGHTS
      checkedAirline = checkedFlights.filter(function(airline) {
        return airline !== name;
      });

      // FILTERING FLIGHTS
      filteredElements = this.state.filteredData.filter(function(flight) {
        return flight.name !== name;
      });

      this.setState({
        checkedAirLines: [...checkedAirline]
        // filteredData: [...filteredElements]
      });
      //   console.log("filtered element local array", filteredElements);

      if (this.state.checkedAirLines.length === 1) {
        console.log("length 1 check");
        filteredElements = [...this.state.flights];
      }
    } else {
      console.log("CHECKED, else block ");
      //   console.log("name", name);
      if (name !== undefined || checkedFlights.length > 0) {
        // console.log("name", name);
        checkedFlights.push(name);

        for (let i = 0; i < checkedFlights.length; i++) {
          filteredElements2 = this.state.flights.filter(function(flight) {
            return flight.name === checkedFlights[i];
          });
          filteredElements = [...filteredElements, ...filteredElements2];
        }
        this.setState({
          checkedAirLines: [...checkedFlights]
          // filteredData: [...filteredData],
        });
        // console.log("filtered elem else in else", filteredElements);
      } else {
        console.log("direct", [...this.state.filteredData]);
        console.log("direct", [...filteredElements], "filter ele");
        // console.log("name", name);
        // console.log("filtered data", this.state.filteredData);
        // console.log("filtered elements", filteredElements);
        // console.log("checked airlines", this.state.checkedAirLines);
        filteredElements = [...this.state.filteredData];
      }
      //   console.log("filtered element local array", filteredElements);
    } // ELSE ENDS

    // if (this.state.time !== "") {

    console.log(
      "non zero block, before filtered elements",
      filteredElements,
      ",",
      time
    );
    filteredElements = filteredElements.filter(function(flight) {
      return flight.duration >= time;
    });
    console.log("non zero block, after filtered elements", filteredElements);
    // }

    // console.log("BEFORE StATE filtered data state", this.state.filteredData);
    // console.log(
    //   "BEFORE StATE non zero block, filtered elements",
    //   filteredElements
    // );
    this.setState({
      filteredData: [...filteredElements]
    });
  };

  handleTimeChange = e => {
    this.setState({
      time: e.target.value
    });
  };

  handleTimeClick = () => {
    console.log("button clicked");
  };

  render() {
    return (
      <div>
        <div style={{ marginTop: "50px" }} className="filters">
          <form action="">
            <div className="sort-option checkboxes-wrapper">
              <p>SORT BY AIRLINE</p>
              {this.state.airLines.map((airline, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={airline}
                    onChange={event => this.handleChange(event, airline)}
                    defaultChecked={this.state.checkedAirLines.includes(
                      airline
                    )}
                    // checked={true}
                  />
                  <label htmlFor={airline}>{airline}</label>
                </div>
              ))}
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

        <div style={{ marginTop: "70px" }} className="flight-headings">
          <h2>NAME</h2>
          <h2>DURATION (mins)</h2>
          <h2>PRICE</h2>
        </div>

        {this.state.filteredData.length === 0 ? (
          <div className="flights">
            {this.state.flights.map(flight => (
              <div key={flight.id} className="flight-card">
                <p> {flight.name} </p>
                <p> {flight.duration} </p>
                <p> {flight.price} </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flights">
            {this.state.filteredData.map(flight => (
              <div key={flight.id} className="flight-card">
                <p> {flight.name} </p>
                <p> {flight.duration} </p>
                <p> {flight.price} </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Sample;
