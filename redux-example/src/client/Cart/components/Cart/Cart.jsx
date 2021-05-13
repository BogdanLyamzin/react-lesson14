import {connect} from "react-redux";

// import {removeFromCart} from "../../reducer/actionCreator";
import {removeFromCart} from "../../reducer/cartSlice";

import {getCart} from "../../../../store/selectors"

const Cart = ({cart, onDelete}) => {
    const {products, loading, error} = cart;
    const productsElements = products.map(({id, name, price}, index) => 
    <li key={id}>{name}. {price} <span className="delete" onClick={()=>onDelete(index)}>X</span></li>)
    return(
        <ul>
            {productsElements}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: getCart(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (idx)=> dispatch(removeFromCart(idx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)