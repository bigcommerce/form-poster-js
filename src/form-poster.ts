import FormBuilder from './form-builder';
import FormPosterOptions from './form-poster-options';
import { isAbsoluteUrl, joinPaths } from './url-utils';

export default class FormPoster {
    /**
     * @internal
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _options?: FormPosterOptions
    ) {}

    postForm(url: string, data: { [key: string]: any }, callback?: () => void, target?: string): void {
        const form = this._formBuilder.build(this._prependHost(url), data, target);

        window.addEventListener('unload', function handleUnload() {
            window.removeEventListener('unload', handleUnload);

            if (callback) {
                callback();
            }
        });

        // In order to submit the form, the form must be attached to DOM.
        document.body.appendChild(form);
        form.submit();
    }

    private _prependHost(url: string): string {
        if (!this._options || !this._options.host || isAbsoluteUrl(url)) {
            return url;
        }

        return joinPaths(this._options.host, url);
    }
}
