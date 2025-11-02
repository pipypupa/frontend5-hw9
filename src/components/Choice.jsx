import styled from "styled-components";

const ChoiceBox = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 1.4rem;
  color: #555;
`;

export const Choice = ({ selected }) => {
  return (
    <ChoiceBox>
      {selected ? `Ви обрали: ${selected}` : "Оберіть стикер 👇"}
    </ChoiceBox>
  );
};
