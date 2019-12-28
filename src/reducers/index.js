import { combineReducers } from "redux";
import compteReducer from "./compteReducer";
import operationReducer from "./operationReducer";
import errorReducer from "./erreurReducer";
import carteBancaireReducer from "./carteBancaireReducer";
import abonneeReducer from "./abonneeReducer";
import beneficiareReducer from "./beneficiareReducer";
export default combineReducers({
  compte: compteReducer,
  operation: operationReducer,
  cartebancaire: carteBancaireReducer,
  errors: errorReducer,
  abonnee: abonneeReducer,
  beneficiare: beneficiareReducer
});
