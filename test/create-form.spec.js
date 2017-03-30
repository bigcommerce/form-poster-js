import jsdom from 'jsdom';
import createForm from '../src/create-form';

describe('createForm', () => {
    let actionUrl;
    let fields;

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
        fields = {
            field_1: 'foo',
            field_2: 'bar',
        };
    });

    it('should return form with input fields', () => {
        const output = createForm(actionUrl, fields);
        const expectedOutput = (
            '<form style="display: none;" action="/pay/initialize" method="POST" target="_top">' +
                '<input name="field_1" type="hidden" value="foo">' +
                '<input name="field_2" type="hidden" value="bar">' +
            '</form>'
        );

        expect(output.outerHTML).toEqual(expectedOutput);
    });
});
