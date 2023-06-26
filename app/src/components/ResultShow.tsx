import { Results } from "../App";

type props = {
  result: Results
}

const ResultShow: React.FC<props> = ({ result }) => {
  return <div className="result-show">{result.title}</div>
}

export default ResultShow;
