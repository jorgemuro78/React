function ProductCard({ discount, picture, price, name, description }) {
  const styles = {
    backgroundColor: "black",
  };

  if (discount > 0) {
    styles.backgroundColor = "red";
  }

  return (
    <figure className="snip1171">
      <img src={picture} alt="" />
      <div className="price">${price}</div>
      <figcaption>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={styles}>Agregar al carrito</a>
      </figcaption>
    </figure>
  );
}

export default ProductCard;
