import React from 'react';
import Landing from './Landing';
import Matching from './Matching';
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


        switch(this.state.state) {
            case 0:
                return <Landing goToForm = {() => this.changePage(2)}></Landing>
            case 1:
                return <p>Form page</p>
            case 2:
                return <Matching goToForm = {() => this.changePage(1)}></Matching>
            default:
                return <p>Error, please try again</p>
        }

    }
}

export default (Main);
