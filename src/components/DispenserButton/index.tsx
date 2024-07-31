import { useState } from "react";
import BeerIcon from "../Icons/BeerIcon";
import { StyledDispenserButton } from "./DispenserButton.styled";

type DispenserButtonProps = {
  loading: boolean;
  openDispenser(): void;
  closeDispenser(): void;
};

const DispenserButton = ({
  openDispenser,
  closeDispenser,
}: DispenserButtonProps) => {
  const handlePointerDown = () => {
    setIsServing(true);
    openDispenser();
  };

  const handlePointerUp = () => {
    setIsServing(false);
    closeDispenser();
  };

  const [isServing, setIsServing] = useState(false);

  return (
    <StyledDispenserButton
      $isServing={isServing}
      onTouchStart={handlePointerDown}
      onTouchEnd={handlePointerUp}
      onMouseDown={handlePointerDown}
      onMouseUp={handlePointerUp}
      onContextMenu={(e) => e.preventDefault()}
      onMouseLeave={() => (isServing ? handlePointerUp() : null)}
    >
      <BeerIcon />
    </StyledDispenserButton>
  );
};

export default DispenserButton;
