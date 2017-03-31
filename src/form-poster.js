export default class FormPoster {
    /**
     * @param {FormBuilder} formBuilder
     * @returns {void}
     */
    constructor(formBuilder) {
        this._formBuilder = formBuilder;
    }

    /**
     * @param {string} url
     * @param {Object} data
     * @param {function(): void} [callback]
     * @returns {void}
     */
    postForm(url, data, callback = () => {}) {
        const form = this._formBuilder.build(url, data);

        window.addEventListener('beforeunload', function handleBeforeUnload() {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            callback();
        });

        // In order to submit the form, the form must be attached to DOM.
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    }
}
