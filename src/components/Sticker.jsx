import styled from "styled-components";

const StickerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 12px;
  }

  span {
    margin-top: 8px;
    font-weight: 500;
    color: #333;
  }
`;

export const Sticker = ({ img, label, onSelect }) => {
  return (
    <StickerItem onClick={() => onSelect(label)}>
      <img src={img} alt={label} />
      <span>{label}</span>
    </StickerItem>
  );
};
