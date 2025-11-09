import React, { Component } from "react";
import styled from "styled-components";

const ChoiceBox = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: #444;
`;

export class Choice extends Component {
  render() {
    const { selected } = this.props;

    return (
      <ChoiceBox>
        {selected ? `Ви обрали: ${selected}` : "Оберіть стикер 👇"}
      </ChoiceBox>
    );
  }
}
