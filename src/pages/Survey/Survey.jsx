import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader } from "../../utils/Atom";
import styled from "styled-components";

const LoaderStyled = styled.div`
  margin: auto;
  width: fit-content;
  padding: 10px;
  display: block;
`;
const QuestionStyled = styled.h3`
  height: 50px;
  margin-bottow: 10px;
`;

function Survey() {
  const [surveyData, setSurveyData] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  const nbQuestions = useRef(0);
  useEffect(() => {
    fetch("http://localhost:8000/survey")
      .then((response) => response.json())
      .then(({ surveyData }) => {
        setSurveyData(surveyData);
        nbQuestions.current = Object.keys(surveyData).length;
        setDataLoading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  const { questionNum } = useParams();
  let questionNumInt = parseInt(questionNum);
  const questionNumPrecedente = questionNumInt > 1 ? questionNumInt - 1 : 1;
  let questionNumSuivante = 0;
  if (questionNumInt > 0 && questionNumInt < nbQuestions.current) {
    questionNumSuivante = questionNumInt + 1;
  } else {
    questionNumSuivante = nbQuestions.current;
  }

  return (
    <div>
      <div>
        <h1>Questionnaire</h1>
        <LoaderStyled>
          {dataLoading ? (
            <div>
              <h2>
                Question {questionNum} / {nbQuestions.current}
              </h2>
              <QuestionStyled>{surveyData[questionNumInt]}</QuestionStyled>
            </div>
          ) : (
            <Loader />
          )}
        </LoaderStyled>
      </div>
      {questionNumInt === 1 ? (
        <Link>
          <button disabled>Précedente</button>
        </Link>
      ) : (
        <Link to={"/survey/" + questionNumPrecedente}>
          <button>Précedente</button>
        </Link>
      )}

      {questionNumInt === nbQuestions.current ? (
        <Link to="/results">
          <button>Results</button>
        </Link>
      ) : (
        <Link to={"/survey/" + questionNumSuivante}>
          <button>Suivante</button>
        </Link>
      )}
    </div>
  );
}

export default Survey;
