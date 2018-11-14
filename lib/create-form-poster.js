"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var form_builder_1 = require("./form-builder");
var form_poster_1 = require("./form-poster");
function createFormPoster(options) {
    var formBuilder = new form_builder_1.default();
    var formPoster = new form_poster_1.default(formBuilder, options);
    return formPoster;
}
exports.default = createFormPoster;
//# sourceMappingURL=create-form-poster.js.map