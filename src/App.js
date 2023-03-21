import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [image, setImage] = useState();


  const submitHandler = (e) => {
    e.preventDefault();

    const newObj = {
      name: e.target.productName.value,
      price: e.target.productPrice.value,
      stock: e.target.productStock.value,
      sale: e.target.productSale.value,
      category: e.target.category.value,
    };
    // console.log("input newObj:", newObj);

    const productForm = new FormData();
    productForm.append("progImage", image);
    productForm.append("prodInfo", JSON.stringify(newObj));

    console.log("productForm", productForm)
    addNew(productForm);
  }

  function changeHandler(e) {
    console.log("onChange event", e.target.files[0]);
    setImage(e.target.files[0]);
  }

  function addNew(newProduct) {
    axios
      .post("http://localhost:5500/products", newProduct)
      // fetch("http://localhost:6060/products", {
      //   method: "POST",
      //   mode: "cors",
      //   body: newProduct,
      // })
      .then((response) => {
        console.log(response);
      })
      .catch(() => console.log("error posting axios"));
  }

  return (
    <div className='App'>
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <div className="modal-img-container">
          <input
            type="file"
            name="productImage"
            onChange={changeHandler}
          />
        </div>

        <div className="modal-rows">
          <label>
            <b>Name</b>
            <input
              type="text"
              name="productName"
            />
          </label>
          <label>
            <b>Price</b>
            <input
              type="text"
              name="productPrice"

            />
          </label>
        </div>
        <div className="modal-rows">
          <label>
            <b>Stock</b>
            <input
              type="text"
              name="productStock"

            />
          </label>
          <label>
            <b>Sale</b>
            <input
              type="text"
              name="productSale"
            />
          </label>
        </div>

        <div>
          <h3>Choose category</h3>
          <select name="category" className="modal-category">
            <option value="Applainces">Appliances</option>
            <option value="Computers & Tablets">Computers & Tablets</option>
            <option value="Gaming console">Gaming console</option>
            <option value="Telescope">Telescope</option>
          </select>
        </div>

        <button type="submit" className="submit">
          Save changes
        </button>
      </form>
    </div>
  );
}

export default App;
