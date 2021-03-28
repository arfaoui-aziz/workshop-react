import React from "react";
import styled from "styled-components";
import ProductFunc from "../components/ProductFunc";
import { useApi } from "../hooks/useApi";
import { queryApi } from "../utils/queryApi";
//**************************************** */
export default function Products() {
  const [products, err, reload] = useApi("products");
  const deleteProduct = async (id) => {
    const [err] = await queryApi("product/" + id, {}, "DELETE");
    if (err) {
      console.log(err);
    } else await reload();
  };
  return (
    <ProductsWrapper>
      {err && <Errors>{err}</Errors>}
      {products?.map((product, index) => (
        <ProductFunc
          product={product}
          deleteProduct={deleteProduct}
          key={index}
        ></ProductFunc>
      ))}
    </ProductsWrapper>
  );
}

const Errors = styled.p`
  color: red;
`;

const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;
