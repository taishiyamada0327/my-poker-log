import { useState } from "react";
import Button from '@mui/material/Button'

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
      <input value={title} onChange={handleChange} />
      <Button variant="text" type="submit" onSubmit={(event) => handleSubmit}>Create</Button>
    </form>
  </div>
}

export default ResultCreate;
