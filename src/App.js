import React, { useState } from "react";
import stickersData from "./stickers.json";
import { StickerList } from "./components/StickerList";
import { Choice } from "./components/Choice";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f7f9fc;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

export default function App() {
  const [selected, setSelected] = useState("");

  const handleSelect = (label) => {
    setSelected(label);
  };

  return (
    <AppContainer>
      <h1 style={{ textAlign: "center", color: "#333" }}>🎨 Стікери</h1>
      <Choice selected={selected} />
      <StickerList stickers={stickersData} onSelect={handleSelect} />
    </AppContainer>
  );
}
