export default class FormBuilder {
    build(url: string, data: { [key: string]: any }): HTMLFormElement {
        const form = document.createElement('form');

        form.style.display = 'none';

        form.setAttribute('action', url);
        form.setAttribute('method', 'POST');
        form.setAttribute('target', '_top');

        Object.keys(data)
            .forEach(key => {
                const value = data[key];

                form.appendChild(this._createInput(value, key));
            });

        return form;
    }

    private _createInput(value: any, key: string): HTMLInputElement {
        const input = document.createElement('input');

        input.setAttribute('name', key);
        input.setAttribute('type', 'hidden');
        input.setAttribute('value', value);

        return input;
    }
}
