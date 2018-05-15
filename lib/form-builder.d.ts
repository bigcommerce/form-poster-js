export default class FormBuilder {
    build(url: string, data: {
        [key: string]: any;
    }): HTMLFormElement;
    private _createInput(value, key);
}
