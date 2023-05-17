# sabrinastangler.com

This is a repo for my personal website, sabrinastangler.com. Built using create-react-app with typescript because that's my comfy little comfy zone, and I can let my creativity run wild on content & fun features.

# Steps to Replicate

## create-react-app with typescript

1. create repo in github
2. clone repo locally
3. cd into repo
4. cra with typescript with same name as repo
5. open finder, move all the new files created into the root repo folder & delete the now empty created folder
6. make a .gitignore file in the root, add `/node_modules`
7. commit & push to main

## deploying via github pages w/ custom domain

I haven't ironed out all the kinks here, but here's what I've got:

1. in root, `npm install gh-pages --save-dev`
1. in package.json, add homepage key for your custom domain
  * `"homepage": "https://sabrinastangler.com",`
1. in package.json, add predeploy & deploy scripts
  * "predeploy": "npm run build",
  * "deploy": "gh-pages -d build",
1. add /build folder to .gitignore
1. in root, add file `CNAME` with custom domain (ex: sabrinastangler.com)

Remember to also

* Change the title in /public/index.html away from React default
* Change the content on App.tsx away from React default

# (React Documentation) Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
