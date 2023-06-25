import { useState } from "react";

type props = {
  onCreate: Function;
}

const ResultCreate: React.FC<props> = ({ onCreate }) => {
  const [title, setTitle] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreate(title);
    setTitle('')
  }


  return <div>
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} />
      <button>Create!</button>
    </form>
  </div>
}

export default ResultCreate;
