import { isAbsoluteUrl, joinPaths } from '../src/url-utils';

describe('isAbsoluteUrl()', () => {
    it('returns true if absolute URL', () => {
        expect(isAbsoluteUrl('https://foobar.com/hello/world'))
            .toBeTruthy();

        expect(isAbsoluteUrl('http://foobar.com/hello/world'))
            .toBeTruthy();
    });

    it('returns false if relative URL', () => {
        expect(isAbsoluteUrl('/hello/world'))
            .toBeFalsy();

        expect(isAbsoluteUrl('/'))
            .toBeFalsy();
    });
});

describe('joinPaths()', () => {
    it('joins two paths together', () => {
        expect(joinPaths('https://foobar.com', 'hello/world'))
            .toEqual('https://foobar.com/hello/world');
    });

    it('strips out trailing and leading slashes automatically', () => {
        expect(joinPaths('https://foobar.com/', '/hello/world'))
            .toEqual('https://foobar.com/hello/world');
    });
});
