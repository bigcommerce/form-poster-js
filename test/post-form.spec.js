import jsdom from 'jsdom';
import * as createFormModule from '../src/create-form';
import postForm from '../src/post-form';

describe('postForm', () => {
    let actionUrl;
    let data;
    let form;

    beforeAll(() => {
        const document = jsdom.jsdom();

        global.window = document.defaultView;
        global.document = document;
    });

    afterAll(() => {
        global.window.close();

        global.window = null;
        global.document = null;
    });

    beforeEach(() => {
        actionUrl = '/pay/initialize';
        data = { id: 'adyen' };
        form = document.createElement('form');

        spyOn(createFormModule, 'default').and.returnValue(form);
        spyOn(form, 'submit');
    });

    it('should create form', () => {
        const createForm = createFormModule.default;

        postForm(actionUrl, data);

        expect(createForm).toHaveBeenCalledWith(actionUrl, data);
    });

    it('should submit form', () => {
        postForm(actionUrl, data);

        expect(form.submit).toHaveBeenCalled();
    });
});
