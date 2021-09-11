import React from 'react';
import Button from '@material-ui/core/Button';


class Landing extends React.Component{
    constructor(props) {
        super(props)

        this.state={
            state: 0,
        }


    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }
    

    render() {

        return (
            <div className = 'bodyDiv'>
                <h1>BeMyGenEd</h1>

                <p>Catchphrase</p>

                <Button variant="contained" color="primary" onClick = {this.props.nextPage}>
                    Get Started
                </Button>
            </div>
        )

    }
}

export default (Landing);
