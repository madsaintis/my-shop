import { useState } from "react"
import axiosClient from "../client";

async function postImage({ image }) {
  const formData = new FormData();
  formData.append("image", image)

  const result = await axiosClient.post('items/images', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
  console.log(result)
}

export default function CharacterPage() {
  const jobs = ['Killer', 'Wit', 'Knight', 'Seer', 'Warrior', 'Priest']
  const skills = ['GS', 'FS', 'JS', 'DS', 'FB']
  const [file, setFile] = useState()
  const [images, setImages] = useState([])
  const [character, setCharacter] = useState({
    name: "",
    level: null,
    reborn: false,
    cuss: false,
    job: "",
    skills: [],
    description: "",
    price: null,
    photos: []
  })

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({ image: file })
    setImages([result.image, ...images])
  }

  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }

  // Skills checkbox handler
  const handleSkillChange = (event) => {
    setCharacter(char => {
      const updatedSkills = event.target.checked
        ? [...char.skills, event.target.value]  // Add skill
        : char.skills.filter(skill => skill !== event.target.value);  // Remove skill
      return { ...char, skills: updatedSkills };
    });
  }




  return (
    <div className="add-item-page">
      <h1>Add Character</h1>
      <form onSubmit={submit}>
        <div className="grid mt-2 gap-5 grid-cols-2">
          <div>
            <h2 className="text-xl mt-4">Character Name</h2>
            <input type="text" placeholder="Please enter the character name" value={character.name}
              onChange={(event) => setCharacter(char => ({
                ...char,
                name: event.target.value
              }))}
            />
          </div>

          <div>
            <h2 className="text-xl mt-4">Level</h2>
            <input type="number" placeholder="Please enter the character level" value={character.level}
              onChange={(event) => setCharacter(char => ({
                ...char,
                level: event.target.value
              }))} />
          </div>
        </div>


        <h2 className="text-xl mt-4">Additional Info</h2>
        <div className="grid mt-2 gap-5 grid-cols-2">
          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
            <input type="checkbox" checked={character.reborn} onChange={(event) => setCharacter(char => ({ ...char, reborn: event.target.checked }))} />
            <span>Reborn</span>
          </label>

          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
            <input type="checkbox" checked={character.cuss} onChange={(event) => setCharacter(char => ({ ...char, cuss: event.target.checked }))} />
            <span>Cuss Slave</span>
          </label>
        </div>


        <h2 className="text-xl mt-4">Job</h2>
        <div className="grid mt-2 gap-5 grid-cols-2 md:grid-cols-3">
          {
            jobs.map(job => (
              <label key={job} className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
                <input
                  type="radio"
                  value={job}
                  checked={character.job === job}
                  disabled={!character.reborn}
                  onChange={(event) => setCharacter(char => ({ ...char, job: event.target.value }))}
                />
                <span>{job}</span>
              </label>
            ))
          }
        </div>


        <h2 className="text-xl mt-4">Skills</h2>
        <div className="grid mt-2 gap-5 grid-cols-2 md:grid-cols-3">

          {
            skills.map(skill => (
              <label key={skill} className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
                <input type="checkbox" value={skill} onChange={handleSkillChange} />
                <span>{skill}</span>
              </label>
            ))
          }
        </div>

        <h2 className="text-xl mt-4">Description</h2>
        <textarea type="text" placeholder="Please enter the character description" value={character.description} onChange={(event) => setCharacter(char => ({ ...char, description: event.target.value }))} />

        <h2 className="text-xl mt-4">Price</h2>
        <input type="text" placeholder="Please enter the character price" value={character.price} onChange={(event) => setCharacter(char => ({...char, price: event.target.value }))}/>

        <h2 className="text-xl mt-4">Photos</h2>
        <div className="flex gap-5">
          <input type="text" placeholder="Upload using link"></input>
          <button className="bg-gray-200 px-4 rounded-2xl">Add photo</button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <button className="flex gap-5 sds bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Upload
          </button>
        </div>


        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <button type="submit">Submit</button>

      </form >
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div >
  )

}
