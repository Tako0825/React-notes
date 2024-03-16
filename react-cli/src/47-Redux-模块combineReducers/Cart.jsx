import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addProductAction } from './redux/cart/actionCreators'

export class Cart extends PureComponent {
  render() {
  const { products } = this.props.cartReducer
  return (
      <>
        <div>Cart</div>
        {
          products.map(product => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))
        }
        <button onClick={() => this.props.addProduct({
          id: products[products.length - 1].id + 1,
          name: "中分头",
          price: 999 
        })}>add</button>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  cartReducer: state.cartReducer
})

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProductAction(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)