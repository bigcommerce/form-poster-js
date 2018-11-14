export function isAbsoluteUrl(url: string): boolean {
    return /^https?:\/\//.test(url);
}

export function joinPaths(pathA: string, pathB: string): string {
    return `${removeTrailingSlash(pathA)}/${removeLeadingSlash(pathB)}`;
}

function removeTrailingSlash(path: string): string {
    return path.replace(/\/$/, '');
}

function removeLeadingSlash(path: string): string {
    return path.replace(/^\//, '');
}
