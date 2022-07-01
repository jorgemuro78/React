import { useState, useEffect, useRef } from "react";

function SelectBreed({ onBreedChange }) {
  const [breeds, setBreeds] = useState([]);

  //Aqui se guarda la referencia de <select>
  const selectRef = useRef(null);

  useEffect(() => {
    fetch("https://bedu-dogs-api.herokuapp.com/breeds")
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        setBreeds(data);
      });
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    onBreedChange(selectRef.current.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">Lista de razas disponibles</label>
        <select className="form-select text-capitalize" ref={selectRef}>
          {breeds.map((breed) => (
            <option value={breed}>{breed}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary btn-success">
        Obtener imagen
      </button>
    </form>
  );
}

export default SelectBreed;
