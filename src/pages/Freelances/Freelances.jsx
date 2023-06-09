import DefaultPicture from "../../assets/profil.png";
import Card from "../../components/Card";
import styled from "styled-components";

const freelanceProfiles = [
  {
    id: 1,
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: DefaultPicture,
  },
  {
    id: 2,
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: DefaultPicture,
  },
  {
    id: 3,
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: DefaultPicture,
  },
  {
    id: 4,
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: DefaultPicture,
  },
];

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  text-align: center;
`;

function Freelances() {
  return (
    <div>
      <h1>Trouvez votre prestataire</h1>
      <h3>Chez Shiny nous réunissons les meilleurs profils pour vous</h3>
      <CardsContainer>
        {freelanceProfiles.map((elt) => (
          <Card
            key={elt.id}
            label={elt.name}
            title={elt.jobTitle}
            picture={elt.picture}
          />
        ))}
      </CardsContainer>
    </div>
  );
}
export default Freelances;
