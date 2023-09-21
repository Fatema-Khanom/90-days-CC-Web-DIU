import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";


const Products = () => {
    const {products} = useLoaderData()
    // console.log(products)
    return (
        <div className="  md:grid-cols-3 lg:grid grid-cols-3 gap-5 w-10/12 m-auto pt-5">
            {products?.map(product => <ProductsCard key={product.id} product= {product}></ProductsCard>)}
        </div>
    );
};

export default Products;