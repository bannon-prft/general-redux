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

### Reducer Function

- Inputs : Old State + Dispatched Action
- Output : New State Object
- Should be a pure function - same input should always produce the same output
- Returned new state replaces the existing state