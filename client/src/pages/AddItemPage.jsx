
export default function AddItemPage() {
  return (
    <div className="add-item-page">
      <h1>Add Item</h1>
      <form>
        <h2 className="form-label">Item Name</h2>
        <input className='form-input' type="text" placeholder="Please enter the item name"></input>
        <h2 className="form-label">Price</h2>
        <input className='form-input' type="text" placeholder="Please enter the item price"></input>
        <h2 className="form-label">Quantity</h2>
        <input className='form-input' type="text" placeholder="Please enter the item quantity"></input>
        <h2 className="form-label">Description</h2>
        <input className='form-input' type="text" placeholder="Please enter the item description"></input>
        <h2 className="form-label">Item Name</h2>
        <div className="add-photo">
          mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6
        <button className="add-photo-button">+</button>

        </div>
     </form>
    </div>
  )
}
