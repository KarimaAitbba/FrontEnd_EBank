import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getcomptes,
  getCompteById,
  getOperations
} from "../../actions/projectActions";
import { Modal, Button } from "react-bootstrap";
class ListeComptes extends Component {
  componentDidMount() {
    this.props.getcomptes();
  }
  constructor() {
    super();
    this.onClick = this.ClickDetail.bind(this);
    this.state = {
      showModal: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  ClickDetail = e => {
    e.preventDefault();
    this.props.getCompteById(e.target.value, this.props.history);
    const compte = this.props.compte.compte;
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
                <li class="active">
                  <a href="/Comptes">
                    {" "}
                    <i class="menu-icon fa fa-list-ul fa-lg"></i>
                    <strong>Mes Comptes </strong>
                  </a>
                </li>
                <li>
                  <a href="/Operations">
                    {" "}
                    <i class="menu-icon fa fa-tasks fa-lg"></i>
                    <strong>Mes Opérations </strong>
                  </a>
                </li>
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
                    <i class="fa fa-power -off "></i>Se Déconnecter
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
                        <a href="#">Mes Comptes</a>
                      </li>
                      <li class="active">Liste</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="animated fadeIn">
          <div class="row ">
            <div class="col-md-12">
              <div class="clearfix"></div>
              <div class="content">
                <div class="animated fadeIn">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                        <div class="card-header">
                          <strong class="card-title">Mes Comptes</strong>
                        </div>
                        <div class="table-stats order-table ov-h">
                          <table class="table ">
                            <thead>
                              <tr>
                                <th>Numéro de Compte</th>
                                <th>Date de Création</th>
                                <th>Solde Actuel</th>
                                <th>
                                  <center>Action</center>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {comptes.map(compte => (
                                <tr key={compte.idCompte}>
                                  <td>{compte.idCompte}</td>
                                  <td>{compte.dateCreation}</td>
                                  <td>{compte.solde}</td>
                                  <td>
                                    <button
                                      type="button"
                                      class="btn btn-secondary mb-1"
                                      data-toggle="modal"
                                      data-target="#mediumModal"
                                      onClick={this.ClickDetail}
                                      value={compte.idCompte}
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
              </div>
            </div>
          </div>
        </div>

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
                  Détails sur votre Compte
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
                  <tbody key={compte.idCompte}>
                    <tr>
                      <th>Numéro de Compte Bancaire</th>
                      <td>{compte.idCompte}</td>
                    </tr>
                    <tr>
                      <th>Date de Création</th>
                      <td>{compte.dateCreation}</td>
                    </tr>
                    <tr>
                      <th>Montant</th>
                      <td>{compte.solde}</td>
                    </tr>
                    <tr>
                      <th>Numéro de Contrat</th>
                      <td>
                        {compte.abonne
                          ? compte.abonne.contrat.codecontrat
                          : "0"}
                      </td>
                    </tr>
                    <tr>
                      <th>Date d'Expiration de Contrat</th>
                      <td>
                        {compte.abonne
                          ? compte.abonne.contrat.dateexperation
                          : "0"}
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
                  mountain zebra and the Grévy's zebra. The plains zebra and the
                  mountain zebra belong to the subgenus Hippotigris, but Grévy's
                  zebra is the sole species of subgenus Dolichohippus. The
                  latter resembles an ass, to which it is closely related, while
                  the former two are more horse-like. All three belong to the
                  genus Equus, along with other living equids.
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
    );
  }
}

ListeComptes.propTypes = {
  compte: PropTypes.object.isRequired,
  getcomptes: PropTypes.func.isRequired,
  getCompteById: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  compte: state.compte
});
export default connect(mapStateToProps, { getcomptes, getCompteById })(
  ListeComptes
);
