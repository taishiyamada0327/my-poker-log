import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

type props = {
  buttonTitle: String;
  digTitle: String;
  open: boolean;
  onSubmit: Function;
  onClose: Function;
}

export default function FormDialog (props: props) {
  const [digOpen, setDigOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(value);
    setValue('');
    handleClose();
  }

  const handleClose = () => {
    setDigOpen(false);
    props.onClose();
  }

  // openの値が変化した時
  React.useEffect(() => setDigOpen(props.open), [props.open]);

  return(
    <div>

      <Button variant="outlined" onClick={() => setDigOpen(true)}>
        {props.buttonTitle}
      </Button>
      <Dialog
        open={digOpen}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>{props.digTitle}</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Box>
              <TextField
                autoFocus
                value={value}
                margin='dense'
                id='message'
                fullWidth
                label='test'
                type="text"
                variant="standard"
                onChange={handleChange}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} type='submit'>OK</Button>
            <Button onClick={handleClose}>close</Button>
          </DialogActions>
        </form >
      </Dialog>
    </div>
  )
}