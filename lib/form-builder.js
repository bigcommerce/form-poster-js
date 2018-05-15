"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormBuilder = (function () {
    function FormBuilder() {
    }
    FormBuilder.prototype.build = function (url, data) {
        var _this = this;
        var form = document.createElement('form');
        form.style.display = 'none';
        form.setAttribute('action', url);
        form.setAttribute('method', 'POST');
        form.setAttribute('target', '_top');
        Object.keys(data)
            .forEach(function (key) {
            var value = data[key];
            form.appendChild(_this._createInput(value, key));
        });
        return form;
    };
    FormBuilder.prototype._createInput = function (value, key) {
        var input = document.createElement('input');
        input.setAttribute('name', key);
        input.setAttribute('type', 'hidden');
        input.setAttribute('value', value);
        return input;
    };
    return FormBuilder;
}());
exports.default = FormBuilder;
//# sourceMappingURL=form-builder.js.map