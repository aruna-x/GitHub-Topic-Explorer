# GitHub Topic Explorer
***By [Aruna Evan](https://aruna-x.github.io/portfolio/)***

**GitHub Topic Explorer allows a user to explore topics on GitHub. It pulls data from the GitHub GraphQL API endpoint to display topics related to a user's search query. The information for related topics includes the number of stargazers (people following a topic).**

## Dev Notes:

### GraphQL Packages

- [Apollo](https://www.apollographql.com/docs/react/get-started/) v3.5.9
  - *Apollo is a state management library that allows us to use GraphQL in React easily.*
- GraphQL v16.3.0

### React Packages

- React v17.0.2
- React Dom v17.0.2
- React Scripts v5.0.0

### Redux Packages

- React-Redux v7.2.6
  - *Redux allows the app to scale state nicely as the app grows, by preventing cumbersome prop drilling.*
- Redux-Persist v6.0.0
  - *Redux-Persist uses local storage to maintain state even on page load. This helps a user keep their breadcrumb history if they accidentally refresh or exit the page.*

### Styling Packages

- [Styled Components](https://styled-components.com/) v5.3.3
  - *Styled Components provides easy-to-use CSS-in-JS functionality. I often keep Styled Components in-file while I develop, then extricate them later for cleaner file and code organization. I am flexible and can learn any preferred in-house style guide or file structure.*

### Tools
- GraphiQL via GitHub's [Explorer](https://docs.github.com/en/graphql/overview/explorer) tool: 
  - quickly and easily debug potential formatting issues or to draft a query even before authenticating an app
- VS Code [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode):
  - I used this formatting tool's defaults to format code quickly. It can be modified to match another style guide.

### Useful Links
- Docs on GitHub's GraphQL [topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)
- Docs on GitHub's GraphQL [stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)
  - *Stargazers are the people watching a given topic*
- [GitHub API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql) to authenticate apps

## How to Run App & Test

(1) At the top level of the app's directory, create a .env file, and add your [GitHub API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql). There are instructions on the page linked. Use scopes provided that match the behavior of GraphQL Explorer.

    Name .env variable: REACT_APP_GITHUB_ACCESS_TOKEN

(2) `npm install` to set up node modules

(3) `npm start` to run app locally

Testing is included in future improvements below, but query data can be double checked by using GitHub's [Explorer](https://docs.github.com/en/graphql/overview/explorer) tool.


## Notes on Future Improvements

- Code Structuring:

  - A sample of a specific company's style guide and preferred file organization would allow me to style the code and organize files in ways that work for the company.

- Refactoring:

  - At Breadcrumb.js line 26 there is a " > " character that **incorrectly** triggers an error in VS Code. I'd find a way not to set off those bells.

- Additional Features:
  
  - Testing (perhaps using [Jest](https://jestjs.io/docs/tutorial-react)) is a top priority for future work for this app.
  - There are two or so topics that have at least 10 related topics. If useful, I'd provide deeper search when a query returns 10 items to be sure I've retrieved *all* related topics.
  - Improvements to the breadcrumb feature if I knew better what a user wanted. User testing would help.
  - Links to the most popular public repos associated with topics. 
  - A feature leveraging Chron Jobs and Twilio to notify a user of brand new "related topics" that may be added by GitHub. (A potential way to keep on top of the latest tech.)
  - Any other improvements would entirely depend on the intended user's needs. I would want to know who it's for, why they need it, and what their experience of a demo page would be, in order to better fine tune the UI and their UX.