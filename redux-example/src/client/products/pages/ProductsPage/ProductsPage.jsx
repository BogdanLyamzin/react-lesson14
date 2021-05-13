import {Component} from "react";
import {connect} from "react-redux";

import ProductList from '../../components/ProductList';

// import {getProducts} from "../../reducer/actionCreator";
import {fetchProducts} from "../../reducer/productsSlice";

import {getAllProducts, isProductsLoading, isFetchProductsError} from "../../../../store/selectors"

class ProductsPage extends Component {

    render(){
        const {list, loading, error} = this.props;

        if(loading){
            return <p>....Loading</p>
        }

        if(error) {
            return <p>Cannot get products list</p>
        }

        return (
            <ProductList list={list} addToCart={this.props.addToCart} />
        )
    }
}

const mapStateToProps = state => {
    return {
        list: getAllProducts(state),
        loading: isProductsLoading(state),
        error: isFetchProductsError(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllProducts: ()=> dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
