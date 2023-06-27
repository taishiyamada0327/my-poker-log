import React from "react";
import { Table, Link, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { Results } from "../App";
import ResultShow from "./ResultShow";

type props = {
  results: Results[];
}

const ResultList: React.FC<props> = ({ results }) => {
  const renderedResults = results.map((result) => {
    return <ResultShow key={result.id} result={result}/>
  })

  return(
    <React.Fragment>
      <Typography component="h2" variant="h6" color="default" gutterBottom>
        Recent Results
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderedResults}
        </TableBody>
      </Table>
      <Link color="inherit" href="#" sx={{ mt:3 }}>
        See more results
      </Link>
    </React.Fragment>
  )
}

export default ResultList;
