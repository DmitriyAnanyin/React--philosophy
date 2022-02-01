import React from "react";

class SearchBar extends React.Component {
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  handleIsStockChange(e) {
    this.props.onIsStockOnlyChange(e.target.checked)
  }

  render () {
    return (
      <>
        <input 
          type={'search'}
          value={this.props.filterText}
          onChange={(e) => this.handleFilterTextChange(e)}
        />
        <label htmlFor="isStock" style={{marginTop: '10px'}}>
          <input
            type={'checkbox'}
            checked={this.props.isStockOnly}
            onChange={(e) => this.handleIsStockChange(e)}
          />
          &nbsp;Only show products in stock
        </label>
      </>
    )
  }
}

export default SearchBar