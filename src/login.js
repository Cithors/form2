import React, { Component } from 'react';

export class Login extends Component {

    render() {
        return (
            <form action="http://auth.test/api_login" method="post">
                <div class="form-group">
                    <h3>Adresse mail:</h3>
                    <input type="email" class="form-control" name="mail" />
                </div>
                <div class="form-group">
                    <h3>Mot de passe:</h3>
                    <input type="password" class="form-control" name="pwd"/>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">OK</button>
            </form>
        )
    }
}

export default Login;
