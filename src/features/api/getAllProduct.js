const getAllProducts = async () => {
  const allProducts = await fetch(
    "http://localhost:5000/products?_limit=10000"
  );
  return allProducts.json();
};
