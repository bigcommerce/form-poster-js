import FormBuilder from '../src/form-builder';

describe('FormBuilder', () => {
    let formBuilder;

    beforeEach(() => {
        formBuilder = new FormBuilder();
    });

    describe('#build()', () => {
        let data;
        let url;

        beforeEach(() => {
            url = '/url/123';
            data = { field_1: 'foo', field_2: 'bar' };
        });

        it('returns a HTML form with hidden input fields', () => {
            const output = formBuilder.build(url, data);
            const expectedOutput = (
                '<form style="display: none;" action="/url/123" method="POST" target="_top">' +
                    '<input name="field_1" type="hidden" value="foo">' +
                    '<input name="field_2" type="hidden" value="bar">' +
                '</form>'
            );

            expect(output.outerHTML).toEqual(expectedOutput);
        });
    });
});
