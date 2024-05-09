import useAxios from "../hooks/useAxios";
import Product from "./Product";
import { TitleProduct, ContainerProduct } from "./styles";

const ProductMain = () => {
    const { response, loading, error } = useAxios("https://fakestoreapi.com/products");

    return (
        <>
        <article>
            <TitleProduct>Products</TitleProduct>
        </article>
        <ContainerProduct>
                {
                    response !== null && !loading ?
                    response.map( product => {
                        const { title, price, description, category, image, id } = product;
                        return <Product title={title} price={price} description={description} category={category} image={image} key={id}/>;
                    }) : <p>Loading...</p>
                }
        </ContainerProduct>
        </>
    )
}

export default ProductMain;