import {connect} from "react-redux";

import {addToCart} from "../../../../store/actionCreator"

const ProductCard = ({title, url, price, description, onAddToCart}) => {
    const handleClick = ()=> {
        const newProduct = {
            title, price, url
        };
        onAddToCart(newProduct)
    }
    return (
    <li className='product-list-card'>
        <img src={url} alt={title}/>
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <button type='button' onClick={handleClick} >Add to cart</button>
    </li>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (newProduct)=> {
            const action = addToCart(newProduct)
            dispatch(action); // dispatch(addToCartCreator(newProduct))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductCard);