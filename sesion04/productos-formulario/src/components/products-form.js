import { useState } from "react";

// function ProductForm({ products, setProducts })
function ProductForm({ onProductSubmit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    const product = {
      name,
      picture,
      price,
      description,
    };
    //Spread Operator
    // setProducts([product, ...products]);
    onProductSubmit(product);
  }

  return (
    <form className="row" onSubmit={onSubmit}>
      <div className="mb-3 col-6">
        <label className="form-label">Nombre del producto</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-3 col-6">
        <label className="form-label">Precio</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div className="mb-3 col-6">
        <label className="form-label">Descripción</label>
        <textarea
          className="form-control"
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="mb-3 col-6">
        <label className="form-label">Foto(url)</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setPicture(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
}

export default ProductForm;
