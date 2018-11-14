export default class FormPoster {
    private _formBuilder;
    private _options;
    postForm(url: string, data: {
        [key: string]: any;
    }, callback?: () => void): void;
    private _prependHost(url);
}
