import React, { Component } from 'react';
import './RandomUser.css';
import propTypes from 'prop-types';


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
                    imgUrl: data.results[0].picture.large,
                })
            })
    }

    componentDidMount() {
        this.getNewUser();
        console.log('component mounted');
    }

    generateNewProfile() {
        this.getNewUser();
        console.log('creating new user');
    }

    ageSexLocation(e) {
        this.setState({ enabled: !this.state.enabled });
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <img src={this.state.imgUrl} alt="" onClick={this.generateNewProfile} />
                <h6 className="Asl" onClick={this.ageSexLocation}>
                    <h6>{this.state.email}</h6>
                    <h6>{this.state.phone}</h6>
                </h6>
            </div>
        )
    }
}


export default RandomUser