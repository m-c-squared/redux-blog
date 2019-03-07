export const getBlog = data => {
  return fetch(`https://jsonplaceholder.typicode.com/${data}`)
    .then(res => res.json());
};
