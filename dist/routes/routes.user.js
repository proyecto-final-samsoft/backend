"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _controllerUser = _interopRequireDefault(require("../controllers/controller.user.js"));
var _express = _interopRequireDefault(require("express"));
var _security = require("../services/security.js");
/**
 * Esta es la ruta del usuario
 * @type {object}
 */
var routerUser = _express["default"].Router();

// RUTAS
routerUser.post("/login", _controllerUser["default"].login);
routerUser.put("/account", _controllerUser["default"].updateAccounts);
routerUser.post("/account", _controllerUser["default"].createCodeOTP);
routerUser["delete"]("/account", _controllerUser["default"].deleteCodeOTP); // PROBARLO

// ONLY USER
routerUser.post("/user", _controllerUser["default"].createUser);
routerUser["delete"]("/user", _controllerUser["default"].deleteUser); // PROBARLO

routerUser.post("/shopping", _controllerUser["default"].createShopping);
routerUser.post("/reportRequest", _controllerUser["default"].createReportRequest);
routerUser.post("/formNewUser", _controllerUser["default"].createFormNew);
routerUser.get("/formNewUser", _controllerUser["default"].ShowFormNewUser);
routerUser.post("/formDemageUser", _controllerUser["default"].createFormDemage);
routerUser.get("/formDemageUser", _controllerUser["default"].ShowFormDemageUser);
routerUser.post("/fichaUser", _controllerUser["default"].createUserFicha);
routerUser.get("/fichaUser", _controllerUser["default"].showFichasUser);

// checkAuth
// Para validar el token
routerUser.post("/oauth", _security.checkAuth, _controllerUser["default"].validarToken);
var _default = exports["default"] = routerUser;