import imgError from "../../assets/404.png";
import styled from "styled-components";

const BlocMainError = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
`;
const ImgError = styled.img`
  width: 800px;
  display: block;
  margin: auto;
`;

function Error() {
  return (
    <BlocMainError>
      <h1>Oups Cette Page n'existe pas</h1>
      <ImgError src={imgError} />
    </BlocMainError>
  );
}

export default Error;
