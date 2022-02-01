import React from "react"

class ProductRow extends React.Component {
  render () {
    const product = this.props.product
    let className = 'product-table__row'
    
    return (
      <>
        <p 
          className={
            product.stocked ? className : `${className} no-stocked`
          }
        >
          {this.props.product.name}
        </p>
         
        <p className={className}>
          {this.props.product.price}
        </p> 
      </>
    )
  }
}

export default ProductRow