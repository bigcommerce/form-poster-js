"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinPaths = exports.isAbsoluteUrl = void 0;
function isAbsoluteUrl(url) {
    return /^https?:\/\//.test(url);
}
exports.isAbsoluteUrl = isAbsoluteUrl;
function joinPaths(pathA, pathB) {
    return "".concat(removeTrailingSlash(pathA), "/").concat(removeLeadingSlash(pathB));
}
exports.joinPaths = joinPaths;
function removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
}
function removeLeadingSlash(path) {
    return path.replace(/^\//, '');
}
//# sourceMappingURL=url-utils.js.map