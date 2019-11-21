#Arrow functions
-----------------
Arrow funtion is another way of creating functions using key word `function`
<br>
Supports only in ES6. <br>
With arrow function no need to bind `this`

eg:
```js
let findName = (<params>) => {
  //define here
}
```
equivalent using normal function
```js
function findName(<params>){
  //define here
}
```

#React Component
----------------
To create a view component with state and funtions and default render method.
Create a class that extends from React.Component

use below to import module
```js
import React from 'react'
```

and class should be exported from file

eg:
```js
class Signup extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>Hello World</div>
    )
  }
}
export default Signup
```

#####Components using arrow function
we can avoijd calling `render` fuction with this method
```js
const Signup = (props) => {
  return <div>Hello World</div>
}
```
###State
-------
Stores components state in object. and it cannot be changed directly<br>
Use `setState` method for updating state<br>
access state using
```js
this.state
```
eg:
```js
state = { name: 'shan'}
```
###Props
--------
Props are atrtibutes sent with component call. <br>
Access props using `this.props`
eg:
```js
 <Signup name='somename'>
```
##Containers
------------
Containers are another form of react component but that deals with redux data.
it doesn't render any DOM.
helps to separate logics

eg:
```js
let SignupForm = props => {
  return (
    <input type='text'>
  )
}
```
#Routing
---------
Routing can be achieved by using library `react-routed-dom'
```js
import { Router } from "react-router-dom"
```
routing is basically loading components in the main page
eg:
```jsx
<Router history={history}>
  <Switch>
    <Route exact path="/" component={Signup} />
    <Route path="/signin" component={Signin} />
    <Route  component={PageNotFound} />
  </Switch>
</Router>
```
`Switch` is like a commom switch funtion in any language. just switches the appropriate route.<br>
`exact` option specifies router to do exact match. route `/` is common to all routes.

#Redux
------
Redux is a javascript library to manage State in the application. <br>
its using single state for entire application, and this data can accessed application wide.

library 'redux'

redux can connected to react component by using library 'react-redux' and this sould be added via npm

###Redux - Provider
-------------------
Provider is using to connect store and the react application. Provider component should be wrapp react app entry point. in index.js
`Provider` should be imported from `react-redux`
eg:
```js
ReactDOM.render(
  <Provider store={store}>
     <App />
  </Router>,
  document.getElementById('root')
);
```
###Redux - Store
-------------
Store is used to store all data in the entire application. And these data accessible from all components thats connected to store. <br>
To create a redux store
```js
import { createStore } from "redux";
const store = createStore(<reducer>);
export default store;
```
###Redux - Reducer
------------------
Reducers are plain javascript function that accepts two parameters and it will create new state in store.

eg:
```js
export function SignupReducer(state = {}, action){
  if(action.type == 'REGISTER_USER'){
    console.log('REGISTER')
    return Object.assign({}, state, action.payload, {signup_errors: '', signup_success: 'Successfully registerd'});
  }
}
```
####To combine multiple reducers
Add `combineReducers` from `redux` library to the file.

```js
import { combineReducers} from  'redux';
import { SignupReducer } from './signup_reducer';
import { SigninReducer } from './signin_reducer';

const rootReducer = combineReducers({
    user: SignupReducer,
    login: SigninReducer
});

export default rootReducer;
```
###Redux -Actions
-----------------
Actions are plain javascript function that returns plain objects.<br>
return object contains two fields type, payload(optional)<br>
type will hold the action name as string, and payload will hold optional data

eg:
```js
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```
user will trigger this action from react view(eg: button click event) then it will pass to all reducers but matched type reducer will update the state

eg:
```js
export function MyReducer(state = {}, action){
  if(action.type == 'ADD_TODO'){
    return Object.assign({}, state, {task_name: 'read book'});
  }
}
```

###Connect Redux store to component
-----------------------------------
To connect component with store we need to import `connect` from `react-redux`

eg:
```js
import { connect } from 'react-redux';
.
.
.
export default connect(MapStatetoProps,MapDispatchToProps)(<component>)
```

###MapStateToProps
------------------
function used for mapping all or selected state to props of a component
eg(All States):
```js
function MapStatetoProps(state){
  return state;
}
```

eg(specific states):
```js
function MapStatetoProps(state){
  return {users: state.users}
}
```
###MapDispatchToProps
-------------------
This function helps to connect redux action with react components, and these actions will available as react props. But we can call actions by using 'this .props.dispatch(<Action>)`

So we can call a action using map dispatch to props like below
```js
this.props.registerUser(values)
```
eg:
```js
function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}
```
###bindActionCreators
---------------------
Its using from create a object with multiple actions, its just simplyfying above example.
eg:
```js
import {bindActionCreators} from 'redux';
function mapDispatchToProps(dispatch){
  return bindActionCreators({registerUser: registerUser}, dispatch);
}
```
with the help of this method we can easily dispatch an action from components like `this.props.registerUser(<params>)`

###Redux middleware
-------------------
Redux middleware used to call a function before dispatching an action. <br>
To use a middleware its should be added to the store. Its a usefull place to write api call. `applyMiddleware` function from `redux` should be used to connect middleware.

eg:
```js
import { applyMiddleware   } from "redux";
import {saveUserMiddleware} from "../middleware";
const store = createStore(rootReducer, applyMiddleware(saveUserMiddleware));
```
Create a middleware by
```js
export const saveUserMiddleware = store => next => action => {
  if (action.type === 'REGISTER_USER') {
    axios.post('/users', action.payload)
      .then((response) => {
        store.dispatch({type: 'REGISTER_USER', payload: response})
      })
      .catch((error)=> {
       store.dispatch({type: 'REGISTER_USER_FAILED', payload: error })
      });
  }
  return next(action);
}
```
###Redux Thunk
--------------
Thunk is another kind of redux middleware, with use  of thunk we can avoid to write business logic in separate middleware and we can write it in actions itself. this seems more readable.

To use redux thunk it must be install using npm
```sh
npm i redux-thunk --save-dev
```
eg:
```js
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));
```
and in action we must call another function with argument `dispatch`
eg:
```js
export function getData(payload) {
  return function(dispatch) {
    return fetch("https://apiserve.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}
```
using arrow function

eg:
```js
export const registerUser = (payload) => dispatch => {
    return axios.post('/users', payload, {headers: {  'Content-Type': 'application/json',}})
    .then((response) => {
      dispatch({type: 'REGISTER_USER', payload: response.data})
      dispatch(reset('signup'));
    })
    .catch((error)=> {
      dispatch({type: 'REGISTER_USER_FAILED', payload: error.response })
    });
}
```
###Redux Saga
-------------

####Todo




