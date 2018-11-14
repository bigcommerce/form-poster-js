"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_utils_1 = require("./url-utils");
var FormPoster = (function () {
    function FormPoster(_formBuilder, _options) {
        this._formBuilder = _formBuilder;
        this._options = _options;
    }
    FormPoster.prototype.postForm = function (url, data, callback) {
        var form = this._formBuilder.build(this._prependHost(url), data);
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
    FormPoster.prototype._prependHost = function (url) {
        if (!this._options || !this._options.host || url_utils_1.isAbsoluteUrl(url)) {
            return url;
        }
        return url_utils_1.joinPaths(this._options.host, url);
    };
    return FormPoster;
}());
exports.default = FormPoster;
//# sourceMappingURL=form-poster.js.map