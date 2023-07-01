import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

export default function FormDialog(props: any) {

  const {
    title,
    message,
    open,
    onClose
  } = props

  const [digOpen, setDigOpen] = React.useState(false);

  const handleClose = () => {
    setDigOpen(false);
    onClose();
  }

  // openの値が変化した時
  React.useEffect(() => setDigOpen(open), [open]);

  return(
    <Dialog open={digOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box>{message}</Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>close</Button>
      </DialogActions>
    </Dialog>
  )
}