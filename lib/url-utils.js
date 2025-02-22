"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.joinPaths = joinPaths;
function isAbsoluteUrl(url) {
    return /^https?:\/\//.test(url);
}
function joinPaths(pathA, pathB) {
    return "".concat(removeTrailingSlash(pathA), "/").concat(removeLeadingSlash(pathB));
}
function removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
}
function removeLeadingSlash(path) {
    return path.replace(/^\//, '');
}
//# sourceMappingURL=url-utils.js.map