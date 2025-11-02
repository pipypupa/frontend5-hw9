import styled from "styled-components";
import { Sticker } from "./Sticker";

const StickerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 стікери в ряд */
  gap: 20px;
  padding: 20px;
  justify-items: center;
  align-items: center;

  /* Робимо тільки два ряди */
  max-width: 800px;
  margin: 0 auto;
  height: auto;
`;

export const StickerList = ({ stickers, onSelect }) => {
  return (
    <StickerGrid>
      {stickers.map((item, index) => (
        <Sticker key={index} {...item} onSelect={onSelect} />
      ))}
    </StickerGrid>
  );
};
