import React, { Component } from 'react';

export class Form extends Component {

    render() {
        return (
            <form action="http://auth.test/api_form" method="post">
                <div class="form-group">
                    <h3>Id user:</h3>
                    <input type="number" class="form-control" name="id" />
                </div>
                <div class="form-group">
                    <h3>Date:</h3>
                    <input type="date" class="form-control" name="date"/>
                </div>
                <div class="form-group">
                    <h3>Heure (start):</h3>
                    <input type="time" class="form-control" name="start"/>
                </div>
                <div class="form-group">
                    <h3>Heure (end):</h3>
                    <input type="time" class="form-control" name="end"/>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">OK</button>
            </form>
        )
    }
}

export default Form;
