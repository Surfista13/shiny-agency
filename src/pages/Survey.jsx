import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Survey() {
  let { questionNum } = useParams();
  return (
    <div>
      <button>
        <Link to={"/survey/" + (questionNum > 1 ? questionNum-- : questionNum)}>
          Précédente
        </Link>
      </button>
      <button>
        <Link
          to={"/survey/" + (questionNum > 1 ? questionNum + 1 : questionNum)}
        >
          Suivante
        </Link>
      </button>

      <h1>Questionnaire</h1>
      <h2>Question {questionNum}</h2>
    </div>
  );
}

export default Survey;
