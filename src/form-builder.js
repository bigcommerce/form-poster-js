export default class FormBuilder {
    /**
     * @param {string} url
     * @param {Object} data
     * @returns {HTMLFormElement}
     */
    build(url, data) {
        const form = document.createElement('form');

        form.style.display = 'none';

        form.setAttribute('action', url);
        form.setAttribute('method', 'POST');
        form.setAttribute('target', '_top');

        Object.keys(data).forEach((key) => {
            const value = data[key];

            form.appendChild(this._createInput(value, key));
        });

        return form;
    }

    /**
     * @private
     * @param {string} value
     * @param {string} key
     * @returns {HTMLInputElement}
     */
    _createInput(value, key) {
        const input = document.createElement('input');

        input.setAttribute('name', key);
        input.setAttribute('type', 'hidden');
        input.setAttribute('value', value);

        return input;
    }
}
