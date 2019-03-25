This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes

> The deployable solution should be built in a folder named `dist`

Create React App builds to a `build` folder. I figured the wasn't the most important criteria to comply with or spend time on changing.

### How did you decide which technologies to use as part of your solution?

I wanted to use a similar stack to what Stan uses for it's TV apps (Preact, CSS Modules). However, I also wanted to take the opportunity to use hooks for the first time, and the Preact CLI doesn't yet support them. For that reason I chose:

- React (Create React App)
- CSS Modules
- React Hooks for managing state (specifically, `useReducer`)

A quick note on hooks: hooks themselves are great - easy to learn, understand and use - however _testing_ them was a real pain. Most testing libraries aren't ready for hooks yet. I spent a lot of time figuring out which package to use and how to use it, and even the one I ended up using, `react-testing-library`, has weird quirks with hooks (like you'll see a repeated warning when you run the tests - that's being discussed [here](https://github.com/kentcdodds/react-testing-library/issues/281#issuecomment-461221880)).

### Are there any improvements you could make to your submission?

The footer menu doesn't look all that nice on small screens. With more time I would give it more breakpoints, and separate it into columns depending on the current width.

The navigation between pages doesn't use the history API, so clicking "Back" will take you away from the app entirely. I added a "Back" link to the `PageTitle` component, but using the history API would be a good addition.

### What would you do differently if you were allocated more time?

- Add pre-commit hooks to run prettier and eslint
- Use typescript or flow for types - especially for the enums (state.status etc)
- More graceful image loading (pre-calculate height, show a spinner until image loads)
- Use history API to navigate (will allow back button to go back to main page)
- Fix the warning in the tests
- Hover effects for the titles

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
