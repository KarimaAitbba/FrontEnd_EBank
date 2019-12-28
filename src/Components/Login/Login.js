import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <center>
        <img src="images/logo.png" alt="Logo" />
        <div class="col-sm-8">
          <div class="col-sm-9">
            <div class="card">
              <div class="card-header">Authentification</div>
              <div class="card-body card-block">
                <form action="#" method="post" class="">
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">
                        <i class="fa fa-user"></i>
                      </div>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Identifiant"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">
                        <i class="fa fa-asterisk"></i>
                      </div>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Mot de Passe"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="form-actions form-group">
                    <button type="submit" class="btn btn-danger btn-sm">
                      Se Connecter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br> <br></br> <br></br>
      </center>
    );
  }
}
