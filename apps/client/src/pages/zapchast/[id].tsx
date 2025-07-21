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

    console.log(products);

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
    const { id } = context.params as { id: string };

    const potentialId = id.substring(0, 36);
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    const parsedId = uuidRegex.test(potentialId) ? potentialId : null;

    console.log(parsedId);

    if (!parsedId) {
      return {
        notFound: true,
      };
    }

    const res = await fetch(`http://localhost:8000/product/${parsedId}`);

    const product: IProduct = await res.json();

    console.log(product);

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


function Index(props: { product: IProduct }) {
  console.log("hello")
  return <ProductPage {...props.product} />;
}

export default Index;
