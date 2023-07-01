import { useState } from "react";
import Button from '@mui/material/Button'
import FormDialog from "./FormDialog";

type props = {
  onCreate: Function;
}

const ResultCreate: React.FC<props> = ({ onCreate }) => {
  const [digOpen, setDigOpen] = useState(false);

  return <div>
    <FormDialog
      buttonTitle="+ 成績を登録"
      digTitle="成績を登録"
      open={digOpen}
      onSubmit={onCreate}
      onClose={() => setDigOpen(false)}
    />
  </div>
}

export default ResultCreate;
