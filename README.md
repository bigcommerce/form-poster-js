# form-poster

This is a JavaScript library for making a POST request as if you are submitting a HTML form. The request will have `application/x-www-form-urlencoded` content-type header. This is useful in situations where you want the same behaviour as submitting a HTML form without actually having the form in DOM.

## Usage

You can install this package using npm, yarn or bower. Below is an example of how to use it.

```js
import { createFormPoster } from 'form-poster';

const formPoster = createFormPoster();
const url = '/url/123';
const data = { field_1: 'foo', field_2: 'bar' };

formPoster.postForm(url, data, () => {
    console.log('done');
});
```

## Development

Use yarn to install dependencies. i.e.:

```sh
yarn install
```

The source code should be transpiled before it gets released. To do so, run the following command:

```sh
yarn build
```

Also, before you release a new version, remember to update the changelog. To do so, run the following command:

```sh
yarn changelog
```

After that, you can commit, tag and push to Github.
