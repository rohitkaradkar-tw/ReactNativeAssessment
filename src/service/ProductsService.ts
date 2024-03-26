const getProductsRoute = 'https://fakestoreapi.com/products';

export const fetchProducts = async () => {
  const response = await fetch(getProductsRoute);
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  return await response.json();
};
