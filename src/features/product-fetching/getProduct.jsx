const getProduct = async ({ productUrl }) => {
  try {
    const response = await fetch(productUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export default getProduct;
