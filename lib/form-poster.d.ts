export default class FormPoster {
    private _formBuilder;
    postForm(url: string, data: {
        [key: string]: any;
    }, callback?: () => void): void;
}
