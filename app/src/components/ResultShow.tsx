import { Results } from "../App";
import { TableCell, TableRow } from "@mui/material";


type props = {
  result: Results
}

const ResultShow: React.FC<props> = ({ result }) => {
  return(
    <TableRow key={result.id}>
      <TableCell>{result.id}</TableCell>
      <TableCell>{result.title}</TableCell>
  </TableRow>
  )
}

export default ResultShow;
