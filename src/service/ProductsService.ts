export async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
}
