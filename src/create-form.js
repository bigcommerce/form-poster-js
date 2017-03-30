/**
 * Create input
 * @param {string} value
 * @param {string} key
 * @returns {HTMLInputElement}
 */
function createInput(value, key) {
    const input = document.createElement('input');

    input.setAttribute('name', key);
    input.setAttribute('type', 'hidden');
    input.setAttribute('value', value);

    return input;
}

/**
 * Create form
 * @param {string} url
 * @param {Object} data
 * @returns {HTMLFormElement}
 */
export default function createForm(url, data) {
    const form = document.createElement('form');

    form.style.display = 'none';

    form.setAttribute('action', url);
    form.setAttribute('method', 'POST');
    form.setAttribute('target', '_top');

    Object.keys(data).forEach((key) => {
        const value = data[key];

        form.appendChild(createInput(value, key));
    });

    return form;
}
