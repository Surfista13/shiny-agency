import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/colors";

//Utilisation du CSS in JS
const CardLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;
const CardTitle = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;
const CardImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: auto;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 250px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardImage src={picture} alt="freelance" />
      <CardLabel>{label}</CardLabel>
    </CardWrapper>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
Card.defaultProps = {
  title: "",
  label: "",
  picture: "DefaultPicture",
};

export default Card;
