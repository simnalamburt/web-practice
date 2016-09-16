**_Wait!_** Did you see [create-react-app](https://github.com/facebookincubator/create-react-app)?

<br>

Modern Web Practice
========
> [Flow] + [Babel] + [Webpack] + [React] = *Promised Victory*

Do frontend development in modern and safe way **Right Now**. Please use this
repository as boilerplate.

```bash
npm i

npm t           # Static type check (flow)
npm run build   # Build everything at once
open index.html

npm start       # Do everything except flow in watch mode
                # Go to http://localhost:8080/webpack-dev-server/
```
###### See also
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

<br>

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
