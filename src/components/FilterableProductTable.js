import React from "react"
import SearchBar from "./FilterableProductTable/SearchBar"
import ProductTable from "./FilterableProductTable/ProductTable"

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      isStockOnly: false
    }
  }

  handleFilterTextChange(value) {
    this.setState({
      filterText: value
    })
  }

  handleIsStockOnlyChange(value) {
    this.setState({
      isStockOnly: value
    })

  }
  
  render () {
    return (
      <main className="content">
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}

          onFilterTextChange={value => this.handleFilterTextChange(value)}
          onIsStockOnlyChange={(value => this.handleIsStockOnlyChange(value))}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
        />
      </main>
    )
  }
}


export default FilterableProductTable