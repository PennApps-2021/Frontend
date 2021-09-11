import React from 'react';
import Plot from 'react-plotly.js';

class BarGraph extends React.Component {


    constructor(props) {
        super(props)




    }

  render() {
    return (
      <Plot
        data={[
          {type: 'bar', x: this.props.x, y: this.props.y},
        ]}
        layout={{width: 450, height: 350, title: 'Past Grades in ' + this.props.className}}
      />
    );
  }
}

export default BarGraph;