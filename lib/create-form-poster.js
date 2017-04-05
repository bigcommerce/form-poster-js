'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createFormPoster;

var _formBuilder = require('./form-builder');

var _formBuilder2 = _interopRequireDefault(_formBuilder);

var _formPoster = require('./form-poster');

var _formPoster2 = _interopRequireDefault(_formPoster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFormPoster() {
    var formBuilder = new _formBuilder2.default();
    var formPoster = new _formPoster2.default(formBuilder);

    return formPoster;
}
//# sourceMappingURL=create-form-poster.js.map