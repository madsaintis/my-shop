import { useState } from "react"
import axiosClient from "../client";

async function postImage({image}) {
  const formData = new FormData();
  formData.append("image", image)

  const result = await axiosClient.post('items/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  console.log(result)
}

export default function AddItemPage() {
  const [file, setFile] = useState()
  const [images, setImages] = useState([])
  const [item, setItem] = useState({
    name: "",
    description: "",
    quantity: 0,
    price: null,
    photos: []
  })

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({image: file})
    setImages([result.image, ...images])
  }

  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }

  return (
    <div className="add-item-page">
      <h1>Add Item</h1>
      <form onSubmit={submit}>
        <h2 className="text-xl mt-4">Item Name</h2>
        <input type="text" placeholder="Please enter the item name" value={item.name}
              onChange={(event) => setItem(item => ({
                ...item,
                name: event.target.value
              }))}
            />

        <h2 className="text-xl mt-4">Item Price</h2>
        <input type="number" placeholder="Please enter the item price" value={item.price}
              onChange={(event) => setItem(item => ({
                ...item,
                price: event.target.value
              }))}
            />

        <h2 className="text-xl mt-4">Quantity</h2>
        <input type="number" placeholder="Please enter the item quantity" value={item.quantity}
              onChange={(event) => setItem(item => ({
                ...item,
                quantity: event.target.value
              }))}
            />

        <h2 className="text-xl mt-4">Description</h2>
        <textarea type="text" placeholder="Please enter the character description" value={item.description} onChange={(event) => setItem(item => ({ ...item, description: event.target.value }))} />

        <h2 className="text-xl mt-4">Photos</h2>
        <div className="flex gap-2">
          <input type="text" placeholder="Upload using link"></input>
          <button className="bg-gray-200 px-4 rounded-2xl">Add photo</button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <button className="flex gap-2 sds bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Upload
          </button>
        </div>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
  )
}
