import React from "react";
import {
  ProductsContainer,
  ProductsHeading,
  ProducWrapper,
    ProductCard,
    ProductInfo,
  ProductImage,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsStyles";

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProducWrapper>
        {data.map((product, index) => (
          <ProductCard key={index}>
            <ProductInfo>
              <ProductImage src={product.img} alt={product.alt} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductButton>{product.button}</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProducWrapper>
    </ProductsContainer>
  );
};

export default Products;
