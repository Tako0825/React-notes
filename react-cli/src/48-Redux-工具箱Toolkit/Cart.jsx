import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addProduct } from './redux/cart/reducer'

export class Cart extends PureComponent {
  render() {
    const { products } = this.props.cartReducer
    return (
      <div>
        <h2>Cart</h2>
        <button onClick={() => { this.props.addProduct({
            id: products[products.length - 1].id + 1,
            name: "鸡哥"
          }) }}>add</button>
        {
          products.map(product => {
            return (
              <li key={product.id}>{product.name}-{product.id}</li>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
    cartReducer: state.cartReducer
})

const mapDispatchToProps = dispatch => ({
    addProduct: (payload) =>  { dispatch(addProduct(payload)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)