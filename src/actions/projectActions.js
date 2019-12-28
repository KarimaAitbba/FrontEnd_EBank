import axios from "axios";
import {
  GET_COMPTES,
  GET_COMPTEBYID,
  GET_OPERATIONS,
  GET_OPERATIONBYID,
  GET_CARTESBANCAIRES,
  GET_CARTEBANCAIREBYID,
  GET_ABONNEE,
  GET_BENEFICIARES,
  GET_BENEFICIARE
} from "./types";
import { async } from "q";

export const getAbonnee = () => async dispatch => {
  const res = await axios.get("http://localhost:8083/api/abonne/1");

  dispatch({
    type: GET_ABONNEE,
    payload: res.data
  });
};

export const getcomptes = () => async dispatch => {
  const res = await axios.get(
    "http://localhost:8081/api/compte/AllAccountsAbonne/1"
  );

  dispatch({
    type: GET_COMPTES,
    payload: res.data
  });
};

export const getCompteById = (id, history) => async dispatch => {
  const res = await axios.get(`http://localhost:8081/api/compte/Account/${id}`);

  dispatch({
    type: GET_COMPTEBYID,
    payload: res.data
  });
};

export const getOperationByIdOperation = (id, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8081/api/compte/Operation/${id}`
  );

  dispatch({
    type: GET_OPERATIONBYID,
    payload: res.data
  });
};

export const getOperations = (id, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8081/api/compte/AccountOperation/${id}`
  );

  dispatch({
    type: GET_OPERATIONS,
    payload: res.data
  });
};

export const getCartesBancaires = (id, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8081/api/compte//AccountCarteBancaire/${id}`
  );

  dispatch({
    type: GET_CARTESBANCAIRES,
    payload: res.data
  });
};

export const getCarteByIdCarte = (id, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8081/api/compte/CarteBancaire/${id}`
  );

  dispatch({
    type: GET_CARTEBANCAIREBYID,
    payload: res.data
  });
};

export const desactiverCarteBancaire = (id, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8081/api/compte/DesactiverEtatCarteBancaire/${id}`
  );

  dispatch({
    type: GET_CARTESBANCAIRES,
    payload: res.data
  });
  history.push("/CartesBancaires");
};

export const activerCarteBancaire = (id, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8081/api/compte/ActiverEtatCarteBancaire/${id}`
  );

  dispatch({
    type: GET_CARTESBANCAIRES,
    payload: res.data
  });
  history.push("/CartesBancaires");
};

export const updateAbonnee = (abonnee, history) => async dispatch => {
  const res = await axios.post(
    "http://localhost:8083/api/abonne/update",
    abonnee
  );
};

export const getBeneficiares = () => async dispatch => {
  const res = await axios.get(
    "http://localhost:8084/api/beneficiare/allAbonne/1"
  );

  dispatch({
    type: GET_BENEFICIARES,
    payload: res.data
  });
};
export const getBeneficiare = id => async dispatch => {
  const res = await axios.get(
    `http://localhost:8084/api/beneficiare/byId/${id}`
  );

  dispatch({
    type: GET_BENEFICIARE,
    payload: res.data
  });
};

export const deleteBeneficiare = (id, history) => async dispatch => {
  const res = await axios.delete(
    `http://localhost:8084/api/beneficiare/delete/${id}`
  );
  const res1 = await axios.get(
    "http://localhost:8084/api/beneficiare/allAbonne/1"
  );
  dispatch({
    type: GET_BENEFICIARES,
    payload: res1.data
  });
  history.push("/Beneficiares");
};

export const addBeneficiare = (beneficiare, history) => async dispatch => {
  const res = await axios.post(
    "http://localhost:8084/api/beneficiare/save",
    beneficiare
  );
  const res1 = await axios.get(
    "http://localhost:8084/api/beneficiare/allAbonne/1"
  );
  dispatch({
    type: GET_BENEFICIARES,
    payload: res1.data
  });
  history.push("/Beneficiares");
};
