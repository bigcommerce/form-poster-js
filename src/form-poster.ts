import FormBuilder from './form-builder';

export default class FormPoster {
    /**
     * @internal
     */
    constructor(
        private _formBuilder: FormBuilder
    ) {}

    postForm(url: string, data: { [key: string]: any }, callback?: () => void): void {
        const form = this._formBuilder.build(url, data);

        window.addEventListener('unload', function handleUnload() {
            window.removeEventListener('unload', handleUnload);

            if (callback) {
                callback();
            }
        });

        // In order to submit the form, the form must be attached to DOM.
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    }
}
