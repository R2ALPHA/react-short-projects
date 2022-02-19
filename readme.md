PRACTICE: REDUX CORE CONCEPT
==============================
The following project contains demo application for practicing redux core concept. 
We are using redux tool kit library for managing application wide state (In this case authentication)

The redux flow have 
1. Central data (State) store 
2. Reducer function 
3. Action function 
4. Subscriber 

There are some challenges we can face while using react-redux. The redux toolkit library was introduced to solve these problem.
1. Can have typos in identifier name. For larger project it might be cumber some.  One solution is to create a constant and use it through out.
2. Large reducer function. In past we use to split that reducer functions into multiple file.
3. The state should be immutable (we should note mutate it)

