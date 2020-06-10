import React, { Component } from 'react';
import './RandomUser.css';
//import propTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';


class RandomUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            imgUrl: "",
            enabled: false,
        }
    }

    getNewUser = () => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    firstName: data.results[0].name.first,
                    lastName: data.results[0].name.last,
                    name: data.results[0].name.first + " " + data.results[0].name.last,
                    email: data.results[0].email,
                    phone: data.results[0].phone,
                    sex: data.results[0].gender,
                    age: data.results[0].dob.age,
                    location: data.results[0].location.city + ", " + data.results[0].location.state + ", " + data.results[0].location.country,
                    imgUrl: data.results[0].picture.large,
                })
            })
    }

    componentDidMount() {
        this.getNewUser();
        console.log('component mounted');
    }

    generateNewProfile = () => {
        this.getNewUser();
        console.log('creating new user');
    }

    render() {
        return (
            <div className="Person">
                <h1>{this.state.name}</h1>
                <img src={this.state.imgUrl} alt="" onClick={this.generateNewProfile} />
                <Dropdown className="Dropdown">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        A/S/L
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">{this.state.age}</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">{this.state.sex}</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">{this.state.location}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="Dropdown">
                    <Dropdown.Toggle variant="success" id="dropdown-primary-button">
                        Contact
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">{this.state.email}</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">{this.state.phone}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}


export default RandomUser