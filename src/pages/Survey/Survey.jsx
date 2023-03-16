import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Loader } from "../../utils/Atom";
import styled from "styled-components";

function Survey() {
  const [surveyData, setSurveyData] = useState();
  const [dataLoading, setDataLoading] = useState(false);

  const LoaderStyled = styled.div`
    margin: auto;
    width: fit-content;
  `;

  useEffect(() => {
    fetch("http://localhost:8000/survey")
      .then((response) => response.json())
      .then(({ surveyData }) => {
        setSurveyData(surveyData);
        setDataLoading(true);
        console.log(surveyData[1]);
      })
      .catch((error) => console.log(error));
  }, []);

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
        <LoaderStyled>
          {dataLoading ? <h3>{surveyData[questionNumInt]}</h3> : <Loader />}
        </LoaderStyled>
      </div>
    </div>
  );
}

export default Survey;
