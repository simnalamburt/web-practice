[Flow] + [Babel] + [React] + [Webpack] = *Promised Victory*
--------
Do frontend development in modern and safe way **Right Now**.

[Flow]: http://flowtype.org/
[Babel]: https://babeljs.io/
[React]: https://facebook.github.io/react/
[Webpack]: https://webpack.github.io/

```shell
# Install dependencies
npm install

# Build everything
npm test
npm run build
open index.html

# Build everything in watch mode
# Go to http://localhost:8080/webpack-dev-server/
npm run watch
```

I made this repo to use this as boilerplate.

### WOW
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Hello, React!</title>
</head>
<body>
  <div id=example></div>

  <script src="build/_bundle.js"></script>
</body>
</html>
```
```jsx
// main.js
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>
    <h1>Hello, React!</h1>
    <p>My own react practice!</p>
  </div>,
  document.getElementById('example')
);
```
