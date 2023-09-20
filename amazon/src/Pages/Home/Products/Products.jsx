import { useLoaderData } from "react-router-dom";


const Products = () => {
    const {products} = useLoaderData()
    return (
        <div>
            <div>This is product route</div>
        </div>
    );
};

export default Products;