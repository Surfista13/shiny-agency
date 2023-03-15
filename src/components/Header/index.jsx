import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import darkLogo from "../../assets/dark-logo.png";

const HeaderLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  margin: auto;
  &: hover {
    color: white;
    border-radius: 30px;
    background-color: ${colors.primary};
  }
  &: target {
    color: white;
    border-radius: 30px;
    background-color: ${colors.primary};
  }
  ${(props) =>
    props.$isfulllink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`};
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const NavStyled = styled.nav`
  display: flex;
`;

const LogoStyled = styled.img`
  height: 60px;
`;

function Header() {
  return (
    <HeaderStyled>
      <LogoStyled src={darkLogo} />
      <NavStyled>
        <HeaderLink to="/" $isfulllink>
          Accueil{" "}
        </HeaderLink>
        <HeaderLink to="/survey/1" $isfulllink>
          Questionnaire
        </HeaderLink>
        <HeaderLink to="/freelances" $isfulllink>
          Freelances
        </HeaderLink>
      </NavStyled>
    </HeaderStyled>
  );
}

export default Header;
