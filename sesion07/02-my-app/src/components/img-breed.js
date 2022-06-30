import { useState, useEffect } from "react";

function ImgBreed({ breed }) {
  const [picture, setPicture] = useState(null);

  useEffect(
    function () {
      fetch(`http://bedu-dogs-api.herokuapp.com/breeds/${breed}/images`)
        .then((response) => {
          return response.json();
        })
        .then(({ data }) => {
          setPicture(data);
        });
    },
    [breed]
  );

  return (
    <div className="d-flex justify-content-center align-items-center">
      <img className="img-fluid" src={picture} alt="" />
    </div>
  );
}

export default ImgBreed;
