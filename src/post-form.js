import createForm from './create-form';

/**
 * Post form
 * @param {string} url
 * @param {Object} data
 * @param {Function} [callback]
 * @returns {void}
 */
export default function postForm(url, data, callback = () => {}) {
    const form = createForm(url, data);

    // Some browsers require the form to be part of DOM in order to submit
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    window.addEventListener('beforeunload', function handleBeforeUnload() {
        window.removeEventListener('beforeunload', handleBeforeUnload);

        callback();
    });
}
