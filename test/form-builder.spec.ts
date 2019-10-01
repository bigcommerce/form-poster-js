import FormBuilder from '../src/form-builder';

describe('FormBuilder', () => {
    let formBuilder: FormBuilder;

    beforeEach(() => {
        formBuilder = new FormBuilder();
    });

    describe('#build()', () => {
        const url = '/url/123';
        const data = { field_1: 'foo', field_2: 'bar' };
        const target = 'target_iframe';

        it('returns a HTML form with hidden input fields with the default target if no target is provided', () => {
            const output = formBuilder.build(url, data);
            const expectedOutput = (
                '<form style="display: none;" action="/url/123" method="POST" target="_top">' +
                    '<input name="field_1" type="hidden" value="foo">' +
                    '<input name="field_2" type="hidden" value="bar">' +
                '</form>'
            );

            expect(output.outerHTML)
                .toEqual(expectedOutput);
        });

        it('returns a HTML form with hidden input fields and overrides the target when provided', () => {
            const output = formBuilder.build(url, data, target);
            const expectedOutput = (
                '<form style="display: none;" action="/url/123" method="POST" target="' + target + '">' +
                    '<input name="field_1" type="hidden" value="foo">' +
                    '<input name="field_2" type="hidden" value="bar">' +
                '</form>'
            );

            expect(output.outerHTML)
                .toEqual(expectedOutput);
        });
    });
});
