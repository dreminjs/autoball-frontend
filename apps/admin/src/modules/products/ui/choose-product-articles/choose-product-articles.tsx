import { ProductArticlesList } from './list/list';
import { FC, useState } from 'react';
import { useProducts } from '../../model/hooks/products/use-products';
import { InputSearch } from '../../../../components/input-search';
import { useDebounce } from 'use-debounce';



export const ChooseProductArticles: FC = () => {
  const [article, setArticle] = useState('');

  const [debouncedArticle] = useDebounce(article, 300);

  const { ref, data, states } = useProducts({ article: debouncedArticle });

  return (
    <>
      <InputSearch search={article} onChange={(data) => setArticle(data)} />
      <ProductArticlesList
        data={data}
        states={states}
        libRef={ref}
      />
    </>
  );
};
