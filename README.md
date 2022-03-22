# Redux

This is the redux portion from [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Disadvantages to React Context

- Complex Setup / Management can be come quite complex
  - Can have a lot of different context provider components which ends up with deeply nested JSX code as a result
  - One big context component can itself become quite difficult to manage because it does so many things
- Performance
  - Not ready for a replacement for flux-like state propagation

## Core Redux Concepts

- All about having one central data (state) store in the application
- Components set up **subscriptions** to the data store
- Components never directly manipulate the store data
  - Instead use **reducer** (functions) - responsible for mutating the store data
- Components dispatch **actions**
- Components dispatch actions -> actions forwarded to reducer -> reducer turns out new state -> subscribing components are notified so they can update their UI
- Goal is to do different things inside of reducer for different actions
- Redux **does not merge new state with the existing state**, instead it takes what is returned and replaces the existing state with it
- Should *never* mutate existing state, always overwrite it with new state

### Reducer Function

- Inputs : Old State + Dispatched Action
- Output : New State Object
- Should be a pure function - same input should always produce the same output
- Returned new state replaces the existing state

## Redux imports

### useSelector()

- Gives access to data managed in the store
- Gets a function which receives state managed by redux
- Returns part of state to extract
- React-Redux *automatically* sets up subscription to redux-store for this component
- If component is ever unmounted, react-redux automatically clears subscription

### useDispatch()

- Gives back a dispatch function which can be executed
- Action is an object with a type property

### connect()

- Helps with class based components
- Higher-order component
- Execute connect function, which returns a new function which is passed the component 
- Takes 2 function arguments
  - 1. Maps redux state to props
    - returns object where keys are available as props in the receiving component
    - values are logic for drilling into redux state
  - 2. Maps dispatch to props

## Redux Toolkit

### createSlice()

- Takes an object with 3 keys
  ```js
  createSlice({
    name: 'name of slice',
    initialState: {},
    reducers: {
      // actionType(state) { state.toUpdate }
      // e.g.
      increment(state) {
        state.counter++
      }
    }
  })
  ```
  - Uses some other library and makes sure that state CANNOT be mutated, instead returns a copy with only changes in the reducer made
  - Can make 'slices' of reducers to separate concerns 
- Still only have 1 store

### configureStore()

- Takes an object as an argument with key `reducer` that itself takes another object with keys for each separate reducer that is going into the store