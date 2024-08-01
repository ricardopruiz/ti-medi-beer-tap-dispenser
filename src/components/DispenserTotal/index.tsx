import {
  DispenserAnotation,
  DispenserAnotationData,
  DispenserAnotationLabel,
} from "./DispenserTotal.styled";

export type DispenserTotalProps = {
  label: string;
  amount: string;
};

const DispenserTotal = ({ amount, label }: DispenserTotalProps) => {
  return (
    <DispenserAnotation>
      <DispenserAnotationLabel>{`${label}: `}</DispenserAnotationLabel>
      <DispenserAnotationData>{amount}</DispenserAnotationData>
    </DispenserAnotation>
  );
};

export default DispenserTotal;
