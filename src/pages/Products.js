import React from "react";
import styled from "styled-components";
import ProductFunc from "../components/ProductFunc";
import { useApi } from "../hooks/useApi";
import { queryApi } from "../utils/queryApi";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/slices/productsSlice";
//**************************************** */
export default function Products() {
  const [products, err] = useSelector(selectProducts);
  return (
    <ProductsWrapper>
      {err && <Errors>{err}</Errors>}
      {products?.map((product, index) => (
        <ProductFunc product={product} key={index}></ProductFunc>
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
