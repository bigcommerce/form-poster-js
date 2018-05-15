"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormPoster = (function () {
    function FormPoster(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    FormPoster.prototype.postForm = function (url, data, callback) {
        var form = this._formBuilder.build(url, data);
        window.addEventListener('unload', function handleUnload() {
            window.removeEventListener('unload', handleUnload);
            if (callback) {
                callback();
            }
        });
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    };
    return FormPoster;
}());
exports.default = FormPoster;
//# sourceMappingURL=form-poster.js.map