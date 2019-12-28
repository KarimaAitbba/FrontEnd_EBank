import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getcomptes,
  getCompteById,
  getOperations,
  getOperationByIdOperation
} from "../../actions/projectActions";
class ListeOperations extends Component {
  componentDidMount() {
    this.props.getcomptes();
  }
  constructor() {
    super();
    this.onClick = this.ClickDetail.bind(this);
    this.onChange = this.ClickSelect.bind(this);
    this.state = {
      showModal: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  ClickDetail = e => {
    e.preventDefault();
    this.props.getOperationByIdOperation(e.target.value, this.props.history);
  };
  ClickSelect = e => {
    e.preventDefault();
    this.props.getOperations(e.target.value, this.props.history);
  };
  open = e => {
    this.setState({ showModal: true });
    //this.props.getDemandeById(e.target.value, this.props.history);
  };

  close() {
    this.setState({ showModal: false });
  }
  render() {
    const { comptes } = this.props.compte;
    const { compte } = this.props.compte;
    const { operations } = this.props.operation;
    const { operation } = this.props.operation;
    return (
      <div>
        <aside id="left-panel" class="left-panel">
          <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li>
                  <br />
                  <a href="/Accueil">
                    <i class="menu-icon fa fa-laptop fa-lg"></i>
                    <strong>Tableau de Bord </strong>
                  </a>
                  <br />
                  <br />
                </li>
                <li class="menu-title">Gérer ma Contrat</li>
                <li>
                  <a href="/Comptes">
                    {" "}
                    <i class="menu-icon fa fa-list-ul fa-lg"></i>
                    <strong>Mes Comptes </strong>
                  </a>
                </li>
                <li class="active">
                  <a href="/Operations">
                    {" "}
                    <i class="menu-icon fa fa-tasks fa-lg"></i>
                    <strong>Mes Opérations </strong>
                  </a>
                </li>{" "}
                <li>
                  <a href="/Transactions">
                    {" "}
                    <i class="menu-icon fa fa-gears fa-lg"></i>
                    <strong>Transactions </strong>
                  </a>
                </li>
                <li>
                  <a href="/CartesBancaires">
                    {" "}
                    <i class="menu-icon ti-id-badge fa-lg"></i>
                    <strong>Mes Cartes Bancaires </strong>
                  </a>
                </li>
                <li class="menu-title">Gérer mon Compte</li>
                <li>
                  <a href="/MonCompte">
                    {" "}
                    <i class="menu-icon ti-user fa-lg"></i>
                    <strong>Mes Informations </strong>
                  </a>
                </li>
                <li>
                  <a href="/Beneficiares">
                    {" "}
                    <i class="menu-icon fa fa-users fa-lg"></i>
                    <strong>Béneficiares </strong>
                  </a>
                </li>
                <li class="menu-title">Déconnection</li>
                <li>
                  <a href="widgets.html">
                    {" "}
                    <i class="menu-icon fa fa-sign-out fa-lg"></i>
                    <strong>Se Déconnecter </strong>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <header id="header" class="header">
          <div class="top-left">
            <div class="navbar-header">
              <a class="navbar-brand" href="./">
                <img
                  src="images/logo.png"
                  alt="Logo"
                  height="40px"
                  width="190px"
                />
              </a>
              <a class="navbar-brand hidden" href="./">
                <img src="images/logo.png" alt="Logo" />
              </a>
            </div>
          </div>
          <div class="top-right">
            <div class="header-menu">
              <div class="user-area dropdown float-right">
                <a
                  href="#"
                  class="dropdown-toggle active"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    class="user-avatar rounded-circle"
                    src="images/user.jpg"
                    width="100px"
                    height="35px"
                    alt="User Avatar"
                  />
                </a>

                <div class="user-menu dropdown-menu">
                  <a class="nav-link" href="#">
                    <i class="fa fa-power -off"></i>Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="breadcrumbs">
          <div class="breadcrumbs-inner">
            <div class="row ">
              <div class="col-sm-4">
                <div class="page-header float-left">
                  <div class="page-title">
                    <h1>Accueil</h1>
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="page-header float-right">
                  <div class="page-title">
                    <ol class="breadcrumb text-right">
                      <li>
                        <a href="#">Accueil</a>
                      </li>
                      <li>
                        <a href="#">Mes Opérations</a>
                      </li>
                      <li class="active">Liste</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="animated fadeIn">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header">
                    <strong class="card-title mb-3">Choix du Compte</strong>
                  </div>
                  <div class="card-body">
                    <div class="mx-auto d-block">
                      <h5 class="text-sm-center mt-2 mb-1">
                        <div class="row form-group">
                          <div class="col col-md-3">
                            <label for="select" class=" form-control-label">
                              Veuillez Choisir un numéro de Compte:
                            </label>
                          </div>
                          <div class="col-12 col-md-9">
                            <select
                              name="select"
                              id="select"
                              class="form-control"
                              onChange={this.ClickSelect}
                            >
                              <option value="0">Numéro de Compte</option>
                              {comptes.map(compte => (
                                <option value={compte.idCompte}>
                                  {compte.idCompte}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {operations.length !== 0 && (
            <div class="animated fadeIn">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card">
                    <div class="card-header">
                      <strong class="card-title">Opérations Effectuées</strong>
                    </div>
                    <div class="table-stats order-table ov-h">
                      <table class="table ">
                        <thead>
                          <tr>
                            <th>Numéro d'Opération</th>
                            <th>Date d'Opération</th>
                            <th>Montant</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {operations.map(operation => (
                            <tr key={operation.idperation}>
                              <td>{operation.idperation}</td>
                              <td>{operation.dateoperation}</td>
                              <td>{operation.montant}</td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-secondary mb-1"
                                  data-toggle="modal"
                                  data-target="#mediumModal"
                                  onClick={this.ClickDetail}
                                  value={operation.idperation}
                                >
                                  Détail
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            class="modal fade"
            id="mediumModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="mediumModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="mediumModalLabel">
                    Détails sur l'Opération
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <table className="table table-striped table-bordered">
                    <tbody key={operation.idperation}>
                      <tr>
                        <th>Numéro de Compte Bancaire</th>
                        <td>{operation.idperation}</td>
                      </tr>
                      <tr>
                        <th>Date Opération</th>
                        <td>{operation.dateoperation}</td>
                      </tr>
                      <tr>
                        <th>Montant</th>
                        <td>{operation.montant}</td>
                      </tr>
                      <tr>
                        <th>Numéro de Compte</th>
                        <td>
                          {operation.compte ? operation.compte.idCompte : "0"}
                        </td>
                      </tr>
                      <tr>
                        <th>Solde du Compte</th>
                        <td>
                          {operation.compte ? operation.compte.solde : "0"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="largeModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="largeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="largeModalLabel">
                    Large Modal
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>
                    There are three species of zebras: the plains zebra, the
                    mountain zebra and the Grévy's zebra. The plains zebra and
                    the mountain zebra belong to the subgenus Hippotigris, but
                    Grévy's zebra is the sole species of subgenus Dolichohippus.
                    The latter resembles an ass, to which it is closely related,
                    while the former two are more horse-like. All three belong
                    to the genus Equus, along with other living equids.
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" class="btn btn-primary">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListeOperations.propTypes = {
  compte: PropTypes.object.isRequired,
  getcomptes: PropTypes.func.isRequired,
  getCompteById: PropTypes.func.isRequired,
  getOperations: PropTypes.func.isRequired,
  operation: PropTypes.object.isRequired,
  getOperationByIdOperation: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  compte: state.compte,
  operation: state.operation
});
export default connect(mapStateToProps, {
  getcomptes,
  getCompteById,
  getOperations,
  getOperationByIdOperation
})(ListeOperations);
