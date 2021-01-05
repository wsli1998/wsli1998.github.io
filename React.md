This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### 'npm run deploy'

### 'npm start'


```
 npm install react-vis --save                                             887
npm WARN deprecated hoek@4.2.1: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN saveError ENOENT: no such file or directory, open '/Users/wsli1998/package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '/Users/wsli1998/package.json'
npm WARN react-vis@1.11.7 requires a peer of react@15.3.0 - 16.x but none is installed. You must install peer dependencies yourself.
npm WARN react-motion@0.5.2 requires a peer of react@^0.14.9 || ^15.3.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN wsli1998 No description
npm WARN wsli1998 No repository field.
npm WARN wsli1998 No README data
npm WARN wsli1998 No license field.

+ react-vis@1.11.7
added 52 packages from 63 contributors and audited 52 packages in 5.478s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```
 npm update                                                                                                                                                       892
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

+ react@16.14.0
+ react-dom@16.14.0
updated 2 packages and audited 1672 packages in 9.342s

62 packages are looking for funding
  run `npm fund` for details

found 5 vulnerabilities (2 low, 3 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```

```
npm audit                                                                                                                                                        893
                                                                                
                       === npm audit security report ===                        
                                                                                
# Run  npm install react-scripts@4.0.1  to resolve 3 vulnerabilities
SEMVER WARNING: Recommended action is a potentially breaking change
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ yargs-parser                                                 │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ react-scripts                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ react-scripts > webpack-dev-server > yargs > yargs-parser    │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1500                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Remote Code Execution                                        │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ serialize-javascript                                         │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ react-scripts                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ react-scripts > terser-webpack-plugin > serialize-javascript │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1548                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ object-path                                                  │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ react-scripts                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ react-scripts > resolve-url-loader > adjust-sourcemap-loader │
│               │ > object-path                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1573                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


# Run  npm update selfsigned --depth 3  to resolve 1 vulnerability
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Prototype Pollution in node-forge                            │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ node-forge                                                   │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ react-scripts                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ react-scripts > webpack-dev-server > selfsigned > node-forge │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1561                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


# Run  npm update ini --depth 5  to resolve 1 vulnerability
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ ini                                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ react-scripts                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ react-scripts > react-dev-utils > global-modules >           │
│               │ global-prefix > ini                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1589                            │
└───────────────┴──────────────────────────────────────────────────────────────┘


found 5 vulnerabilities (2 low, 3 high) in 1672 scanned packages
  run `npm audit fix` to fix 2 of them.
  3 vulnerabilities require semver-major dependency updates.
```

```
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

up to date in 5.341s

62 packages are looking for funding
  run `npm fund` for details

fixed 0 of 3 vulnerabilities in 1672 scanned packages
  1 package update for 3 vulnerabilities involved breaking changes
  (use `npm audit fix --force` to install breaking changes; or refer to `npm audit` for steps to fix these manually)
```

```
 npm audit fix --force                                                                                                                                            903
npm WARN using --force I sure hope you know what you are doing.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated @hapi/joi@15.1.1: joi is leaving the @hapi organization and moving back to 'joi' (https://github.com/sideway/joi/issues/2411)
npm WARN deprecated rollup-plugin-babel@4.4.0: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-babel.
npm WARN deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/address@2.1.4: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated core-js@2.6.12: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.

> core-js@2.6.12 postinstall /Users/wsli1998/Documents/wslisam/node_modules/babel-runtime/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js@3.8.2 postinstall /Users/wsli1998/Documents/wslisam/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> ejs@2.7.4 postinstall /Users/wsli1998/Documents/wslisam/node_modules/ejs
> node ./postinstall.js

Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)

npm WARN tsutils@3.18.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

+ react-scripts@4.0.1
added 700 packages from 228 contributors, removed 179 packages, updated 448 packages and moved 25 packages in 104.194s

116 packages are looking for funding
  run `npm fund` for details

fixed 3 of 3 vulnerabilities in 1672 scanned packages
  1 package update for 3 vulnerabilities involved breaking changes
  (installed due to `--force` option)
```

```
 npm install react-vis --save                                                                                                                                     905
npm WARN deprecated hoek@4.2.1: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN tsutils@3.18.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

+ react-vis@1.11.7
updated 1 package and audited 2193 packages in 15.976s

128 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```