const baseUrl = "http://MYCOOLURLHERE/api"

const Product = {
  // FETCH ALL PRODUCTS
  all() {
    // return fetch(`${BASE_URL}/products`, {credentials: "include"}).then(
    //   (res) => res.json()
    // );
    try {
      const responseObject = await fetch(`${baseUrl}/products`, {
        credentials: "include",
      });
      if (!responseObject.ok) {
        throw new Error('Network response was not ok.');
      }
      const jsonData = await responseObject.json()
      return jsonData
    } catch(error) {
      console.error('ERROR', error)
    }
    // FETCH A SINGLE PRODUCT
    one(id) {
      return fetch(`${baseUrl}/products/${id}`, {
        credentials: "include"
      }).then( (res) => res.json());
    }
  },
  // create a product
  create(params) {
    // `params` is an object that will be passed in and represents a product
    // aka { body: 'pBody', title: 'pTitle' }
    return fetch(`${baseUrl}/products`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params) // body must match type specified in Content-Type
    }).then( (response) => response.json() );
  },
  // update a product
  update(id, params) {
    return fetch(`${baseUrl}/products/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then( (res) => res.json() );
  }
}

export { Product } 