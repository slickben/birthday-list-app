import React, { Component } from 'react'
import User from './user'


export default class userTable extends Component {
    render() {
        return (
            <div className="col-sm">
                <h1 className="text-center btn-primary mt-4 b-4"> User Table</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">birthday</th>
                        <th scope="col">Age</th>
                        <th scope="col">Hobby</th>
                        </tr>
                    </thead>
                    <User/>
                </table>
            </div>
        )
    }
}
