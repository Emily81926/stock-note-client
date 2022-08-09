import React from "react";
import { connect } from "react-redux";
import { fetchIndicatorData } from "../../actions/getStock";
import Plot from 'react-plotly.js';

class IndicatorData extends React.Component {

  componentDidMount() {
    let symbol = this.props.symbol
    this.props.fetchIndicatorData(symbol)
  }

  getChartValues = () => {
    let XValues = []
    let YValues = []
    for (let i = 0; i < this.props.indicator.length; i++) {
      const date = this.props.indicator[i]["date"]
      const open = this.props.indicator[i]["open"]
      XValues.push(date)
      YValues.push(open)
    }

    return (<Plot
      data={[
        {
          x: XValues,
          y: YValues,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
      ]}
      layout={{ width: 720, height: 440, title: 'Stock Chart' }}
    />)

  }


  render() {
    return (
      <div>
        {this.getChartValues()}
      </div>
    )

  }
};

const mapStateToProps = (state) => {
  return { indicator: state.indicator }
}

export default connect(mapStateToProps, { fetchIndicatorData })(IndicatorData);