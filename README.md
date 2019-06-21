This npm module test and publishing environment is based on [create-react-library](https://github.com/transitive-bullshit/create-react-library) and updated for react hooks (v.16.8.6) and babel packages/helpers for babel 7+.

## Install Instructions
 - `npm install` in project root directory.
 - In new tab, cd from project root directory to `/example`.
 - `npm install` in `/example`.
 - In `package.json`, rename the value for line 2 `name: "comp-scaf",` to what you want the npm module name to be. Note: to prevent random `npm link` errors: name the value for line 2 the same as the root project directory.
 - Go back to tab with root directory and run `npm link`.
 - In `/example` tab, run `npm link <your root project file name>`.
 - Go back to tab with root directory and `npm start`.
 - Go to tab with `/example` and `npm start`.
 - The npm module visualizer in `/example` runs in [http://localhost:3000](http://localhost:3000).

Make changes to `/src `in root of the project, which auto-compiles and hot-reloads in `/example/src` and [http://localhost:3000](http://localhost:3000).

For npm publishing info, take a look at [create-react-library](https://github.com/transitive-bullshit/create-react-library).

**I do not provide support for this codebase- use at your own risk.**