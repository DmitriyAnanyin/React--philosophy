import React from "react"

class ProductCategoryRow extends React.Component {
  render () {
    return (
      <p className="product-table__row product-table__category">
        {this.props.category}
      </p>
    )
  }
}

export default ProductCategoryRow