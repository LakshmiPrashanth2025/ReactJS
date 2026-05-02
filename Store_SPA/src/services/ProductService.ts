export const getProducts = () => {
  const url =
    "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
  return fetch(url).then((response) => response.json());
};
