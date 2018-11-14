import FormBuilder from '../src/form-builder';
import FormPoster from '../src/form-poster';

describe('FormPoster', () => {
    let form: HTMLFormElement;
    let formBuilder: FormBuilder;
    let formPoster: FormPoster;

    beforeEach(() => {
        form = document.createElement('form');
        formBuilder = new FormBuilder();

        jest.spyOn(formBuilder, 'build')
            .mockReturnValue(form);

        formPoster = new FormPoster(formBuilder);
    });

    describe('#postForm()', () => {
        const url = '/url/123';
        const data = { field_1: 'foo', field_2: 'bar' };

        beforeEach(() => {
            jest.spyOn(form, 'submit')
                .mockImplementation(jest.fn());
        });

        it('posts the data using a hidden HTML form', () => {
            formPoster.postForm(url, data);

            expect(formBuilder.build)
                .toHaveBeenCalledWith(url, data);

            expect(form.submit)
                .toHaveBeenCalled();
        });

        it('builds form with host appended to URL if provided', () => {
            formPoster = new FormPoster(formBuilder, { host: 'https://foobar.com/' });

            formPoster.postForm(url, data);

            expect(formBuilder.build)
                .toHaveBeenCalledWith('https://foobar.com/url/123', data);
        });

        it('triggers the callback after posting the data', () => {
            const callback = jasmine.createSpy();

            formPoster.postForm(url, data, callback);

            const event = document.createEvent('Event');

            event.initEvent('unload', true, false);
            document.body.dispatchEvent(event);

            expect(callback)
                .toHaveBeenCalled();
        });
    });
});
