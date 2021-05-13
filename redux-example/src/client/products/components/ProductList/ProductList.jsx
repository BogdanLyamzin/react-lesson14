import ProductCard from '../ProductCard';

const ProductList = ({products, addToCart}) => {
    const productsElements = products.map(product => <ProductCard key={product.id} {...product} addToCart={() => addToCart(product)} />)
    return (
    <>
        <ul>
            {productsElements}
        </ul>
    </>
    )
    
}

export default ProductList;