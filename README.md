## What is react query?

- A library for fetching data in React application

## Why its used ?

- Since react is a UI library so there is no pattern for data fetching
- Use effect hook for data fetching and useState hook for maintaining component state loading , error state and result data.
- If data is needed throughout the app we tend to use a state management library.
- Most state management libraries are good for working with client state. eg isModalOpen etc.
- State management libraries are not goof for working with asynchronous or server state. This is because server state is diff from client state.

## Client vs server state

### Client state 

- Persisted in your app memory and accessing or updating it is synchronous.

### Server state 

- Persisted remotely and requires asynchronous APIs for fetching or updating.
- Has shared ownership
- Data can be updated without your knowledge 
- UI data may not be in sync with the remote data
- challenging when you have to deal with caching, deduping multiple request for same data, updating stale data in the background , performance optimizations etc.

- Todo all this it requires a lot of effort and time , but we can use react-query for this.

## Project setup

1. New react project using CRA
2. Set up an API endpoint that serves mock data for use in our application
3. Set up react router and a few routes in the application
4. Fetch data the traditional way using useEffect and useState
