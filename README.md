[Flow] + [Babel] + [React] + [Webpack] = *Promised Victory*
--------
Do frontend development in modern and safe way **Right Now**. Please use this
repository as boilerplate.

```bash
npm install

npm test        # Static type check (flow)
npm run build   # Build everything at once
open index.html

npm start       # Do everything except flow in watch mode
                # Go to http://localhost:8080/webpack-dev-server/
```

### WOW
All javascripts in `src/` directory and all js libraries will be merged into one
`build/_bundle.js`
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
// @flow
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

[Flow]: http://flowtype.org/
[Babel]: https://babeljs.io/
[React]: https://facebook.github.io/react/
[Webpack]: https://webpack.github.io/
