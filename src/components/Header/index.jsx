import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import darkLogo from "../../assets/dark-logo.png";
import { useState } from "react";

const HeaderLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  margin: auto;
  &: hover {
    color: white;
    border-radius: 30px;
    background-color: ${colors.secondary};
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
  const [activeLink1, setActiveLink1] = useState(false);
  const [activeLink2, setActiveLink2] = useState(false);
  const [activeLink3, setActiveLink3] = useState(false);

  const handleLinkClick = (e) => {
    switch (e.id) {
      case "1":
        setActiveLink1(true);
        setActiveLink2(false);
        setActiveLink3(false);
        break;
      case "2":
        setActiveLink1(false);
        setActiveLink2(true);
        setActiveLink3(false);
        break;
      case "3":
        setActiveLink1(false);
        setActiveLink2(false);
        setActiveLink3(true);
        break;
      default:
        setActiveLink1(false);
        setActiveLink2(false);
        setActiveLink3(false);
    }
  };
  return (
    <HeaderStyled>
      <LogoStyled src={darkLogo} />
      <NavStyled>
        <HeaderLink
          id="1"
          to="/"
          $isfulllink={activeLink1}
          onClick={(e) => handleLinkClick(e.currentTarget)}
        >
          Accueil{" "}
        </HeaderLink>
        <HeaderLink
          id="2"
          to="/survey/1"
          $isfulllink={activeLink2}
          onClick={(e) => handleLinkClick(e.currentTarget)}
        >
          Questionnaire
        </HeaderLink>
        <HeaderLink
          id="3"
          to="/freelances"
          $isfulllink={activeLink3}
          onClick={(e) => handleLinkClick(e.currentTarget)}
        >
          Freelances
        </HeaderLink>
      </NavStyled>
    </HeaderStyled>
  );
}

export default Header;
