import React from "react"
import ProductCategoryRow from "./ProductTable/ProductCategoryRow"
import ProductRow from "./ProductTable/ProductRow"

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText
    const isStockOnly = this.props.isStockOnly

    const rows = []
    let lastCategory = null

    this.props.products.forEach((product) => {
      if (product.name.toLowerCase().indexOf(filterText) === -1) {
        return
      }
      if (isStockOnly && !product.stocked) {
        return
      }
      if (product.category !== lastCategory){
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        )
      } 
      rows.push(
        <ProductRow
          key={product.name}
          product={product}
        />
      )
      
      lastCategory = product.category
    })

    return (
      <div className='product-table'>
        <p>Name</p>
        <p>Price</p>
        {rows}
      </div>
    )
  }
}

export default ProductTable