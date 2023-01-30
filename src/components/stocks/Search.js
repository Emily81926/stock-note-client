import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'semantic-ui-react'



const initialState = { isLoading: false, results: [], value: '' }

export default class Searching extends Component {
  state = initialState

  getData = () => {
    return this.props.data
  }

  handleResultSelect = (e, { result }) => this.setState({ value: result.companyName })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.companyName)
      this.setState({
        isLoading: false,
        results: _.filter(this.getData(), isMatch),
      })
    }, 300)
  }


  render() {
    const { isLoading, value, results } = this.state
    //加上客製化的render
    const resRender = ({ symbol, companyName, price }) => (
      <Link to={`/stocks/${symbol}`} target="_self" rel='nonreferrer'>
        <div className="content" style={{ padding: 'auto' }} ariaChecked="false" ariaSelected="true">
          <div className="center aligned header">
            <h3>{companyName}</h3>
          </div>
          <div className="center aligned meta">
            <span className="symbol">{symbol}</span>
          </div>
          <div className="extra content">
            <div className="center aligned floated dollar">
              <i className="dollar sign icon"></i>
              {price}
            </div>
          </div>
        </div>
      </Link>
    );

    return (
      <Search
        aligned='right'
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results.slice(0, 10)}
        value={value}
        placeholder={this.props.placeholder}
        resultRenderer={resRender}
      />
    )
  }
}
