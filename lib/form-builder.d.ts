export default class FormBuilder {
    build(url: string, data: {
        [key: string]: any;
    }, target?: string): HTMLFormElement;
    private _createInput(value, key);
}
