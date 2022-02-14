import { Fragment } from "react";
import { Route } from "react-router";

const Welcome = () => {
    return (
        <Fragment>
            <h1>The Welcome Page</h1>
            <Route path="/welcome/new-user">
                <p>Welcome, new user</p>
            </Route>
        </Fragment>
    );
};

export default Welcome;