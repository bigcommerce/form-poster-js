import jsdom from 'jsdom';

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
