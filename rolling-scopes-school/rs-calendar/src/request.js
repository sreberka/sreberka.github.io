const makeRequest = function (URL) {
  let obj = fetch(URL, {mode: 'cors'})
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        throw new Error('Error with fetch');
      });
  return obj;
};

export default makeRequest