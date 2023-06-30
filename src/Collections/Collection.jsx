const Collection = ({ props, category }) => {
  const items = props.filter((item) => item.category === category.id);

  return (
    <>
      <h1>This is Collections</h1>

      {items.map((product) => (
        <div key={product.id}>
          <h1>{product.productname}</h1>
          <h3>{product.category}</h3>
          <p>{product.price}</p>
          {product.images.map((image) => (
            <img
              className="product"
              key={image}
              src={image}
              alt={product.productname}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Collection;
