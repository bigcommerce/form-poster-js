'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormPoster = function () {
    /**
     * @param {FormBuilder} formBuilder
     * @returns {void}
     */
    function FormPoster(formBuilder) {
        _classCallCheck(this, FormPoster);

        this._formBuilder = formBuilder;
    }

    /**
     * @param {string} url
     * @param {Object} data
     * @param {function(): void} [callback]
     * @returns {void}
     */


    _createClass(FormPoster, [{
        key: 'postForm',
        value: function postForm(url, data) {
            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

            var form = this._formBuilder.build(url, data);

            window.addEventListener('unload', function handleUnload() {
                window.removeEventListener('unload', handleUnload);
                callback();
            });

            // In order to submit the form, the form must be attached to DOM.
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
        }
    }]);

    return FormPoster;
}();

exports.default = FormPoster;
//# sourceMappingURL=form-poster.js.map