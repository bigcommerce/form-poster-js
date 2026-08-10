import { createFormPoster, FormPoster } from '../src/index';

describe('index', () => {
    it('exports createFormPoster', () => {
        expect(createFormPoster)
            .toBeInstanceOf(Function);
    });

    it('exports FormPoster and createFormPoster returns an instance of it', () => {
        expect(createFormPoster())
            .toBeInstanceOf(FormPoster);
    });
});
