
export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return posts;
    default:
      return posts;
  }
}

// ESLint is throwing an error, will run to see if it works regardless.
// Update: App is running in browswer regardless of problem.