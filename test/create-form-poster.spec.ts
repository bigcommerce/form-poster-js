import createFormPoster from '../src/create-form-poster';
import FormPoster from '../src/form-poster';

describe('createFormPoster', () => {
    it('creates an instance of FormPoster', () => {
        const output = createFormPoster();

        expect(output)
            .toBeInstanceOf(FormPoster);
    });
});
