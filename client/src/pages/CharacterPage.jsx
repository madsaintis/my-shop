import { useState } from "react"
import axiosClient from "../client";

async function postImage({ image }) {
  const formData = new FormData();
  formData.append("image", image)

  const result = await axiosClient.post('items/images', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
  console.log(result)
}

export default function CharacterPage() {
  const [file, setFile] = useState()
  const [images, setImages] = useState([])
  const [job, setJob] = useState();
  const [skill, setSkill] = useState([]);

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({ image: file })
    setImages([result.image, ...images])
  }

  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }

  const handleSkillChange = (event) => {
    if(event.target.checked) {
      setSkill([...skill, event.target.value]);
    }

    else {
      setSkill([...skill.filter(selectedSkill => selectedSkill !== event.target.value)])
    }
  }
  

  return (
    <div className="add-item-page">
      <h1>Add Character</h1>
      <form onSubmit={submit}>
        <div className="grid mt-2 gap-5 grid-cols-2">
          <div>
            <h2 className="text-xl mt-4">Character Name</h2>
            <input type="text" placeholder="Please enter the character name" />
          </div>

          <div>
            <h2 className="text-xl mt-4">Level</h2>
            <input type="number" placeholder="Please enter the character level" />
          </div>
        </div>

        <h2 className="text-xl mt-4">Additional Info</h2>
        <div className="grid mt-2 gap-5 grid-cols-2">
          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
            <input type="checkbox" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>Reborn</span>
          </label>

          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
            <input type="checkbox" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>Cuss Slave</span>
          </label>
        </div>

        <h2 className="text-xl mt-4">Job</h2>
        <div className="grid mt-2 gap-5 grid-cols-2 md:grid-cols-3">
          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
            <input type="radio" value="Killer" checked={job === 'Killer'} onChange={(ev) => setJob(ev.target.value)}/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>Killer</span>
          </label>

          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
          <input type="radio" value="Wit" checked={job === 'Wit'} onChange={(ev) => setJob(ev.target.value)}/>            
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>Wit</span>
          </label>

          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
          <input type="radio" value="Knight" checked={job === 'Knight'} onChange={(ev) => setJob(ev.target.value)}/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>Knight</span>
          </label>

          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
          <input type="radio" value="Seer" checked={job === 'Seer'} onChange={(ev) => setJob(ev.target.value)}/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>Seer</span>
          </label>

          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
          <input type="radio" value="Warrior" checked={job === 'Warrior'} onChange={(ev) => setJob(ev.target.value)}/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>Warrior</span>
          </label>

          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
          <input type="radio" value="Priest" checked={job === 'Priest'} onChange={(ev) => setJob(ev.target.value)}/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>Priest</span>
          </label>
        </div>


        <h2 className="text-xl mt-4">Skills</h2>
        <div className="grid mt-2 gap-5 grid-cols-2 md:grid-cols-3">
          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
            <input type="checkbox" value="GS" onChange={handleSkillChange}/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>GS</span>
          </label>

          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
            <input type="checkbox" value="FS" onChange={handleSkillChange} />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>FS</span>
          </label>

          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
            <input type="checkbox" value="DS" onChange={handleSkillChange} />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>DS</span>
          </label>

          <label className="border p-4 flex rounded-2xl gap-5 items-center cursor-pointer">
            <input type="checkbox" value="FB" onChange={handleSkillChange}/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <span>FB</span>
          </label>
        </div>

        <button onClick={(ev)=> {
          ev.preventDefault();
          console.log(skill)

        }}>Test</button>
        <h2 className="text-xl mt-4">Description</h2>
        <textarea type="text" placeholder="Please enter the character description" />

        <h2 className="text-xl mt-4">Price</h2>
        <input type="text" placeholder="Please enter the character price" />

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
    </div >
  )

}
