import FormPoster from '../src/form-poster';

describe('FormPoster', () => {
    let form;
    let formBuilder;
    let formPoster;

    beforeEach(() => {
        form = document.createElement('form');

        formBuilder = {
            build: jasmine.createSpy().and.returnValue(form),
        };

        formPoster = new FormPoster(formBuilder);
    });

    describe('#postForm()', () => {
        let data;
        let url;

        beforeEach(() => {
            url = '/url/123';
            data = { field_1: 'foo', field_2: 'bar' };

            spyOn(form, 'submit');
        });

        it('posts the data using a hidden HTML form', () => {
            formPoster.postForm(url, data);

            expect(formBuilder.build).toHaveBeenCalled();
            expect(form.submit).toHaveBeenCalled();
        });

        it('triggers the callback after posting the data', () => {
            const callback = jasmine.createSpy();

            formPoster.postForm(url, data, callback);

            const event = document.createEvent('Event');

            event.initEvent('unload', true, false);
            document.body.dispatchEvent(event);

            expect(callback).toHaveBeenCalled();
        });
    });
});
