import {useEffect, useState} from 'react';
import {IProduct} from '../types/types';

// hood to fetch products
const useGetProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        await fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(json => {
            setProducts(json);
            setLoading(false);
          });
      } catch (error) {
        setLoading(false);
        console.log('🚀 ~ fetchProducts ~ error:', error);
        throw error;
      }
    };
    fetchProducts();
    return () => {
      setProducts([]);
    };
  }, []);

  return {products, loading};
};

export default useGetProducts;
