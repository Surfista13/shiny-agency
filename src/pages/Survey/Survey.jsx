import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Survey() {
  const { questionNum } = useParams();
  const questionNumInt = parseInt(questionNum);
  const questionNumPrecedente = questionNumInt > 1 ? questionNumInt - 1 : 1;
  const questionNumSuivante =
    questionNumInt > 0 ? (questionNumInt < 10 ? questionNumInt + 1 : 10) : 1;

  return (
    <div>
      {questionNumInt === 1 ? (
        <Link>
          <button disabled>Précedente</button>
        </Link>
      ) : (
        <Link to={"/survey/" + questionNumPrecedente}>
          <button>Précedente</button>
        </Link>
      )}

      {questionNumInt === 10 ? (
        <Link to="/results">
          <button>Results</button>
        </Link>
      ) : (
        <Link to={"/survey/" + questionNumSuivante}>
          <button>Suivante</button>
        </Link>
      )}

      <div>
        <h1>Questionnaire</h1>
        <h2>Question {questionNum}</h2>
      </div>
    </div>
  );
}

export default Survey;
