import FormBuilder from './form-builder';
import FormPoster from './form-poster';
import FormPosterOptions from './form-poster-options';

export default function createFormPoster(options?: FormPosterOptions): FormPoster {
    const formBuilder = new FormBuilder();
    const formPoster = new FormPoster(formBuilder, options);

    return formPoster;
}
