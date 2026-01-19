const BASE_URL = "https://dummyjson.com";

export const fetchProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products?limit=100`);
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
