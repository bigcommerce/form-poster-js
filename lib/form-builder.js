'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormBuilder = function () {
    function FormBuilder() {
        _classCallCheck(this, FormBuilder);
    }

    _createClass(FormBuilder, [{
        key: 'build',

        /**
         * @param {string} url
         * @param {Object} data
         * @returns {HTMLFormElement}
         */
        value: function build(url, data) {
            var _this = this;

            var form = document.createElement('form');

            form.style.display = 'none';

            form.setAttribute('action', url);
            form.setAttribute('method', 'POST');
            form.setAttribute('target', '_top');

            Object.keys(data).forEach(function (key) {
                var value = data[key];

                form.appendChild(_this._createInput(value, key));
            });

            return form;
        }

        /**
         * @private
         * @param {string} value
         * @param {string} key
         * @returns {HTMLInputElement}
         */

    }, {
        key: '_createInput',
        value: function _createInput(value, key) {
            var input = document.createElement('input');

            input.setAttribute('name', key);
            input.setAttribute('type', 'hidden');
            input.setAttribute('value', value);

            return input;
        }
    }]);

    return FormBuilder;
}();

exports.default = FormBuilder;
//# sourceMappingURL=form-builder.js.map