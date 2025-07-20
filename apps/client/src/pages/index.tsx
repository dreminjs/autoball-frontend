import { ProductsPage } from "@/modules/products";
import { IProduct, IWithPaganation } from "@autoball-frontend/shared-types";
import { GetServerSideProps } from "next";

interface Props {
  products: IWithPaganation<IProduct>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchQuery = context.query.q as string || '';
  
  const searchResults = await fetch(
    `http://localhost:8000/product/public`
  ).then(res => res.json());

  return {
    props: {
      products: searchResults,
      searchQuery
    }
  };
};

export function Index(props: Props) {
 
  return (
      <ProductsPage products={props.products.items} />
  );
}

export default Index;
