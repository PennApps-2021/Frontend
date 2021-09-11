import React from 'react';
import Landing from './Landing';
class Main extends React.Component{
    constructor(props) {
        super(props)

        this.changePage = this.changePage.bind(this)

        this.state={
            state: 0,
        }


    }

    changePage(newState) {
        this.state["state"] = newState;
        this.setState(this.state);
    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {


        let body = null;

        switch(this.state.state) {
            case 0:
                body = <Landing goToForm = {() => this.changePage(1)}></Landing>
                break;
            case 1:
                body = <p>Form page</p>
                break;
            case 2:
                body = <p>Flash cards page</p>
                break;
            default:
                body = <p>Error, please try again</p>
        }


        return body;

    }
}

export default (Main);
