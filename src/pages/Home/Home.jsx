import styled from "styled-components";
import colors from "../../utils/style/colors";
import homeIllustration from "../../assets/home-illustration.svg";
import { Link } from "react-router-dom";

const HomeLink = styled(Link)`
  padding: 10px 30px 10px 30px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  margin: auto;
  color: white;
  border-radius: 30px;
  background-color: ${colors.primary};
`;

const HomeStyled = styled.div`
  background-color: ${colors.backgroundLight};
  display: flex;
  padding: 1.3rem;
  height 700px;
`;

const HomeIllustrationStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
`;

const BlocLeft = styled.div`
  margin: auto;
  text-align: left;
  width: 60%;
`;

const BlocRight = styled.div`
  margin: auto;
  width: 40%;
`;

function Home() {
  return (
    <HomeStyled>
      <BlocLeft>
        <h1>
          Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
        </h1>
        <HomeLink to="/survey/1">Faire le test</HomeLink>
      </BlocLeft>
      <BlocRight>
        <HomeIllustrationStyled src={homeIllustration} />
      </BlocRight>
    </HomeStyled>
  );
}

export default Home;
