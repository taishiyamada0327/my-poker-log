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
      title="成績を登録"
      message="メッセージ本文"
      open={digOpen}
      onClose={() => setDigOpen(false)}
    />
    <Button variant="outlined" onClick={() => setDigOpen(true)}>
      + 成績を登録
    </Button>
  </div>
}

export default ResultCreate;
