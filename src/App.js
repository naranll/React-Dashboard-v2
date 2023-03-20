import './App.css';

function App() {
  const { data: product, setShowModal, setShowAddSpec } = prop;
  const [showNewSpec, setShowNewSpec] = useState(false);
  const [specNumber, setSpecNumber] = useState([]);
  
  const submitHandler = (e) => {
    e.preventDefault();

    const newObj = {
      name: e.target.productName.value,
      price: e.target.productPrice.value,
      stock: e.target.productStock.value,
      sale: e.target.productSale.value,
      category: e.target.category.value,
      spec: product.spec,
    };
    console.log("input newProduct:", newObj);

    if (product) {
      const editedObj = {
        id: product.id,
        ...newObj,
      };
      editProduct(editedObj);
    } else {
      addNew(newObj);
    }
  };

  function editProduct(product) {
    axios
      .patch(`http://localhost:2020/products/${product.id}`, product)
      .then((response) => {
        response && setShowModal(false);
      })
      .catch(() => console.log("error editing product"));
  }

  function addNew(newProduct) {
    axios
      .post("http://localhost:2020/products", newProduct)
      .then((response) => {
        console.log(response);
        response && setShowModal(false);
      })
      .catch(() => console.log("error posting axios"));
  }
  return (
    <form onSubmit={submitHandler}>
            <div className="modal-img-container">
              <img
                src={product && product.image}
                className="modal-image-view"
              />
              <input
                type="text"
                name="productImage"
                defaultValue={product && product.image}
              />
            </div>
            <div className="modal-rows">
              <label>
                <b>Name</b>
                <input
                  type="text"
                  name="productName"
                  defaultValue={product && product.name}
                />
              </label>
              <label>
                <b>Price</b>
                <input
                  type="text"
                  name="productPrice"
                  defaultValue={product && product.price}
                />
              </label>
            </div>
            <div className="modal-rows">
              <label>
                <b>Stock</b>
                <input
                  type="text"
                  name="productStock"
                  defaultValue={product && product.stock}
                />
              </label>
              <label>
                <b>Sale</b>
                <input
                  type="text"
                  name="productSale"
                  defaultValue={product && product.sale}
                />
              </label>
            </div>

            <h4>Specs</h4>
            {product && product.spec && (
              <div className="modal-rows">
                {product.spec.map((specObject, i) => {
                  for (let prop in specObject) {
                    return (
                      <label key={i}>
                        <b>{prop}</b>
                        <input type="text" defaultValue={specObject[prop]} />
                      </label>
                    );
                  }
                })}
              </div>
            )}
            {/* <div
              className="spec-add-btn"
              onClick={() => {
                // setShowNewSpec(true);
                setSpecNumber([...specNumber, ""]);
                // getSpecInput();
                setShowAddSpec(true);
              }}
            >
              <span>
                <AddIcon color={"black"} />
              </span>
              <input type="button" value="Add spec" className="spec-btn" />
            </div> */}
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
  );
}

export default App;
