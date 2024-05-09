import { BuyProduct, PriceProduct, ImageProduct, SectionProduct, TitleProduct } from "./styles";

const Product = ({ title, price, description, category, image, id }) => {
    return(
        <SectionProduct className="product">
            <ImageProduct src={image} alt={title}/>
            <TitleProduct>{title}</TitleProduct>
            <PriceProduct>$ {price}</PriceProduct>
            <BuyProduct>Add to cart</BuyProduct>
        </SectionProduct>
    )
}

export default Product;