import { ProductPage } from '@/modules/products';
import { IProduct } from '@autoball-frontend/shared-types';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

interface IProps {
  product: IProduct;
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch('http://localhost:8000/product/public');
    const data = await res.json();
    const products: IProduct[] = data.items || [];

    const paths = products.map((product) => ({
      params: {
        id: product.id,
      },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps: GetStaticProps<IProps> = async (
  context: GetStaticPropsContext
) => {
  try {
    // const { id } = context.params as { id: string };

    const res = await fetch(
      `http://localhost:8000/product/${'4b6a5363-c08a-4876-9f4a-b4d3033fa73d'}`
    );

    const product: IProduct = await res.json();

    return {
      props: { product },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
function Index(props: {product: IProduct}) {
  return <ProductPage {...props.product} />;
}

export default Index;
