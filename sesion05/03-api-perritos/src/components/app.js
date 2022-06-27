import { useEffect, useState } from "react";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState(null);
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    fetch("http://bedu-dogs-api.herokuapp.com/breeds")
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        setBreeds(data);
        console.log(data);
      });
  }, []);

  function onSubmit(event) {
    event.preventDefault();

    fetch(`http://bedu-dogs-api.herokuapp.com/breeds/${breed}/images`)
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        setPicture(data);
        console.log(data);
      });
  }

  return (
    <div className="container mt-4">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Lista de razas disponibles</label>
          <select
            className="form-select text-capitalize"
            onChange={(event) => setBreed(event.target.value)}
          >
            {breeds.map((breed) => (
              <option value={breed}>{breed}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-success">
          Obtener imagen
        </button>
      </form>
      <div className="d-flex justify-content-center align-items-center">
        <img className="img-fluid" src={picture} alt="" />
      </div>
    </div>
  );
}
export default App;
