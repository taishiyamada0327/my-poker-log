import { Results } from "../App";
import ResultShow from "./ResultShow";

type props = {
  results: Results[];
}

const ResultList: React.FC<props> = ({ results }) => {
  const renderedResults = results.map((result) => {
    return <ResultShow key={result.id} result={result}/>
  })

  return <div className="result-list">
    {renderedResults}
  </div>
}

export default ResultList;
