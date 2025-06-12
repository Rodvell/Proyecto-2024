"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _perfil_e = require("../controllers/perfil_e.controllers");
var router = (0, _express.Router)();
router.get('/perfil_e', _perfil_e.getperfiles_e);
router.post('/perfil_e', _perfil_e.createperfil_e);
router.get('/perfil_e/:id', _perfil_e.getperfil_eID);
router["delete"]('/perfil_e/:id', _perfil_e.deleteperfil_e);
var _default = router;
exports["default"] = _default;