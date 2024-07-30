import { useMutation } from "@tanstack/react-query";
import { Dispenser } from "../types/dispenser.types";
import { updateDispenserStatus } from "../api/beerTapDispenser";

const useUpdateDisenser = () => {
  return useMutation({
    mutationFn: ({ id, status, updated_at }: Dispenser) =>
      updateDispenserStatus({ id, status, updated_at }),
  });
};

export default useUpdateDisenser;
