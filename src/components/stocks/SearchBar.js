import React from "react";

class SearchBar extends React.Component {
  state = {
    filteredData: []
  }

  handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = this.props.data.filter((value) => {
      return (value.symbol.toLowerCase().includes(searchWord.toLowerCase()) || value.companyName.toLowerCase().includes(searchWord.toLowerCase()))
    })
    if (searchWord === "") {
      this.setState({ filteredData: [] })
    } else { this.setState({ filteredData: newFilter }) }
  }


  render() {
    const placeholder = this.props.placeholder

    return (
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder={placeholder} onChange={this.handleFilter} />
          <div className="searchIcon"></div>
        </div>
        {this.state.filteredData.length != 0 && (
          <div className="dataResult">
            {this.state.filteredData.slice(0, 15).map((value, key) => {
              return (<a className="dataItem" href={`/stocks/${value.symbol}`} target="_blank">
                <p>{value.symbol}</p>
              </a>)
            })}
          </div>)}
      </div>
    )
  }
}


export default SearchBar;