**_Wait!_** Did you check [create-react-app]?

<br>

Modern Web Practice
========
> [Flow] + [Babel] + [Webpack] + [React] = *Promised Victory*

Do frontend development in modern and safe way **Right Now**. Please use this
repository as boilerplate.

```bash
yarn

yarn test       # Static type check (flow)
yarn build      # Build everything at once
open index.html

yarn start      # Do everything except flow in watch mode
                # Go to http://localhost:8080/webpack-dev-server/
```
###### See also
- [React Developer Tools]
- [Redux DevTools]

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

--------

[GNU AGPL 3.0 License](LICENSE.md)

[create-react-app]: https://github.com/facebookincubator/create-react-app
[Flow]: http://flowtype.org/
[Babel]: https://babeljs.io/
[React]: https://facebook.github.io/react/
[Webpack]: https://webpack.github.io/
[React Developer Tools]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
[Redux DevTools]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
