import { useState } from "react";
import BeerIcon from "../Icons/BeerIcon";
import { StyledDispenserButton } from "./DispenserButton.styled";
import LoadingSpinner from "../LoadingSpinner";

type DispenserButtonProps = {
  openDispenser(): void;
  closeDispenser(): void;
  isLoading: boolean;
};

const DispenserButton = ({
  openDispenser,
  closeDispenser,
  isLoading,
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
      {isLoading ? (
        <LoadingSpinner color="accent" type="pageSpinner" />
      ) : (
        <BeerIcon />
      )}
    </StyledDispenserButton>
  );
};

export default DispenserButton;
