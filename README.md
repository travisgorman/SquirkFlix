# SquirkFlix
A NetFlix kinda thing with React, Redux, Jest, Standard, etc...

Yarn
React Router v4
Jest
Snapshot testing
Redux dev tools generated tests
Webpack v2
ES6 Modules
CSS Imports via Webpack
Webpack Dev Server
Better code organization
Better constructed narrative
Better teaching of Redux


___

Where did `dispatchSetSearchTerm` come from? Why is it a prop of `Landing`?

* `dispatchSetSearchTerm` is declared inside the return statement of `mapDispatchToProps`
* `mapDispatchToProps` is passed to `connect`, imported from `react-redux`, which connects `Landing` to redux
