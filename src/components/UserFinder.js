import { Fragment } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import { Component } from 'react/cjs/react.production.min';
import UsersContext from '../store/users-context';

class UserFinder extends Component {

    static contextType = UsersContext; // you can set it only once.

    constructor() {
        super();

        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    }

    componentWillUnmount() {
        console.log("UNMOUNT");
    }

    componentDidMount() {
        // Send http request 
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            });
        }
    }

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    }
}

export default UserFinder;