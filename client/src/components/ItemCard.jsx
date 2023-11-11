
/* eslint-disable react/prop-types */
export default function ItemCard({ item }) {
  return (
    <div className="item-card">
      <div className="item-image">
        <img src={item.image} alt={"alternate image"} />
      </div>
      <div className="item-details">
        <div className="item-header">
          <p className="item-info">
            <span className="item-name">{item.name}</span>
          </p>
        </div>
        <div className="item-footer">
          <div className="item-price">${item.price}</div>

          <button className="button-30" role="button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

// Later add


