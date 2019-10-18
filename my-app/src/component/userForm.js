import React, { Component } from 'react'
import Calendar from 'react-calendar';
import axios from 'axios';
// import Calendar from 'react-input-calendar'


export default class userForm extends Component {
    constructor () {
        super()
        this.state = {
            fisrtName: "",
            lastName: "",
            date: new Date(),
            age: "",
            hobby: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChangeCalender = (date) => {
        // console.log(date.state.value)
        this.setState({
            date: date
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        this.onUserSubmit(this.state.fisrtName, this.state.lastName, this.state.date, this.state.age, this.state.hobby);
        console.log(this.state.date)
        this.setState({
            fisrtName: "",
            lastName: "",
            birthday: "",
            age: "",
            hobby: "",
        })
    }

    onUserSubmit = (firstName, lastName, birthday, age, hobby) => {
        axios.post("http://localhost:4001/api/user", {
            firstName, 
            lastName, 
            birthday, 
            age, 
            hobby
        })   
    }



    render() {
        return (
            <div className="col-sm mt-4">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="fName" className="col-sm-3 col-form-label">First Name</label>
                        <input type="text" id="fName" name="fisrtName" className="col-sm-9" onChange={this.handleChange} ></input>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lName" className="col-sm-3 col-form-label">last Name</label>
                        <input type="text" id="lName" name="lastName" className="col-sm-9" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group row">
                       <label htmlFor="brithday" className="col-sm-3 col-form-label">Birthday</label>
                       <Calendar value={this.state.date}  id="brithday" className="col-sm-9 h-2 small" onChange={this.handleChangeCalender}/> 
                    </div>
                    <div className="form-group row">
                        <label htmlFor="age" className="col-sm-3 col-form-label">Age</label>
                        <input type="number" id="age" className="col-sm-9" name="age" onChange={this.handleChange}></input>
                    </div>
                    {/* <input type="date" name="fisrtName"></input> awaiting calender component */}
                    <div className="form-group row">
                        <label htmlFor="hobby" className="col-sm-3 col-form-label">hobby</label>
                        <input type="text" className="col-sm-9" id="hobby" name="hobby" onChange={this.handleChange}></input>
                    </div>
                    
                    <input type="submit" value="Submit" className="btn btn-primary large"></input>
                </form>
            </div>
        )
    }
}
