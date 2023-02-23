# React Book Library 📚

[![made-with-react](https://img.shields.io/badge/Made%20with-React-1f425f.svg)](https://reactjs.org/)
[![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![build](https://img.shields.io/appveyor/build/gruntjs/grunt)](https://pub.dev/packages/flutter_bounce#-analysis-tab-)

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) used to go through the list of the books.
- This project is **fully responsive** and has taken UI motivations from [GetGround](https://www.getground.co.uk/) to give a feeling of belongingness to the GetGround ecosystem.
- The UI/UX implementations and strategiies are purely developer's ([Alok Kumar](https://github.com/aloklearning)) work and there is no way it has been copy-pasted from other website.
- This project comes with a basic filter to find out the books which aligns with our choice of input.

## Pre-Requisites

Make sure you have the following installed in your system before you proceed to run this project:

- [ ] Node > 14.x.x
- [ ] npm > 5.x.x
- [ ] Latest version of `React Installed`

## Verification

In case you would like to verify the above, please follow the below commands in your terminal. In case it is there, great! Else, you can install it by clicking on the following links in here:

**Important:** It is recommended you update your `npm` and `node`, for making use of lates features possible.

1. **Node**

```bash
node -v
```

2. **NPM**

```bash
npm -v
```

3. **React**

```bash
npm view react version
```

## Features

The project has been created to give the users the best experience possible. Here are some of the highlighting features the web provides:

- Fully responsive
- Nice UI and UX
- The app is fully paginated and updates based on the search query as well.
- The project uses [React-Redux](https://react-redux.js.org/) for the storing and updating the book items.
- The app provides filtering of the books. You can type in the value **(only one)**, which you like from the given book, or if you have something in mind, and it will give you the results.
- The app is picking up and updates the data in the search query. Refreshing the page will not affect the app, the data will persist.

## Running the Project

In the project directory, you can run:

- Go to the project directory, you can run:

```bash
npm install && npm start
```

- Runs the app in the development mode.
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- Launches the test runner in the interactive watch mode.\
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
npm test
```

## Submission Checklist

- [x] Using React, build a webapp that queries this paginated endpoint. Use Redux to save the results and then print out the results as a list on the page.
- [x] The app should be paginated with the pagination reflected in the url (so when the page is refreshed, the same results are shown).
- [x] Write at least one component as a React class based component (the rest can be functional components). Component name is [BooksCard](https://github.com/aloklearning/react-book-library/blob/main/src/Components/BooksCard.tsx).
- [x] Write at least one unit test.
- [x] The repo is GitHub repo has kept **private**.
- [x] Host your code on Github, put all the code in a Pull Request **(Partially done)**.

## Bonus Checklist

- [x] Add a search field to the app that upon request populates the ​filters​ post param
- [x] Use Material-UI as a component library.
- [x] Add loading state

## Assumptions

- By url, we meean `search query url`.
- Filter post param update leads to updating the books item and the url doesn't have to look like `[type: 'all', values: ['']]`.
- Writing unit test, doesn't have any hard rules on testing every component and features. Have added 4 test cases, doing a very basic unit testing.
- Can install other helping libraries like `react-router-dom`, `material-ui/icons`.
- Opening a PR against a non-empty repo will work, as we have used the word **(probably)**.

## Improvements

A project can always be improved. Given the time, I have tried my level best to give the best UI-UX possible. Although I do have some pointers where the app can be improved:

- [ ] Query param could have been improved, but the url for filter has been done in such a way to establish reconciliiation between the results and the url.
- [ ] A more robust unit testing could have been written to make the app more robust and bug free.
- [ ] A more enhanced UI with having more features for filtering, like specific searching values for **book_title**, **authors** etc, or a better loading widget.
- [ ] A footer to give more details about the developer.

## Challenges Faced

The project was really nice, considering the fact that the delivery has to be close to perfect. There are few things which did test the developer's grit:

- Writing unit test for stateful components.
- Making persistant data using url and updating it based upon paginations and searches.
- I have learnt using `material-ui` on the go, so working with it, was a bit challenging, but it later was managed.
- Creating a PR, as both the branches were not sharing any histories. Hence, I had to merge the content and make it atleast PR friendly. You can find more about the problem [here](https://spences10.medium.com/git-allow-unrelated-histories-a39a3814b981). Do not want to mess with the current work and also want to check the checklist. Hence went with this solution.

## Feedback

There must be few bugs which will come while testing the app. I am open to feedback, as I firmly believe that a product becomes successful with the feedbacks. I will appreciate the time very much. Here is my email: `alokk830@gmail.com`.

## Licence

This project is licensed under the MIT licence - see the [LICENCE](https://github.com/aloklearning/react-book-library/blob/main/LICENCE) for more details.

## Learn More

- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).
