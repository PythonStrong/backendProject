import { useState } from "react"
import axios from "axios";
import { api } from "./api/api";

function App() {
  const [value, setValue] = useState({name: "", lastName: "", age: "", job: ""});
  const [data, setData] = useState([])

  const handleChange = (event) => {
    setValue({ ...value, [event.target.id]: event.target.value });
  };

  const handlePost = () => {
    axios.post(`${api}/api/new-user/create`)
  }
  
  


  return (
    <div className="form">
      <div class="group">
      <input
        id="name"
        className="input"
        type="search"
        placeholder="name"
        value={value.name}
        onChange={handleChange}
        name="searchbar"
      />
      <input
        id="lastName"
        className="input"
        type="search"
        placeholder="lastName"
        name="searchbar"
        value={value.lastName}
        onChange={handleChange}
      />
      <input
        id="age"
        className="input"
        type="search"
        placeholder="age"
        name="searchbar"
        value={value.age}
        onChange={handleChange}
      />
      <input
        id="job"
        className="input"
        type="search"
        placeholder="job"
        name="searchbar"
        value={value.job}
        onChange={handleChange}
      />
      <button onClick={() => console.log(handlePost)}>Log Values</button>
      </div>
    </div>
  )
}

export default App
