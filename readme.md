Advance Redux (Handle Async tasks with Redux)
=============================================
The simple rule about reducer is:
Reducer must be pure, side-effect free and synchronous functions. 
Now the question which may arise to our mind is that, Where should side-effects and async tasks be executed?
1. Inside the components (e.g useEffect)
2. Inside the action creators
We will mainly focus here on the use of Action creator Thunk.

A thunk is a special function that delays an action until later. So in other word we can also say that an action creator function that does NOT return the action itself but another function which eventually returns the function. Thunk is a high order function that delays an action until later. 
The logic is that the dispatch function can actually takes a function or an object. 
When it takes an object it will pass these object to the reducer but when it will take the function then it will automatically execute these functions. 
This function can have side effect like http request and there we can further dispatch. 
This function will get dispatch as an argument too. 