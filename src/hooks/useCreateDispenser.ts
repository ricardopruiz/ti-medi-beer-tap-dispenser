import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDispenser } from "../api/beerTapDispenser";

const useCreateDispenser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ flowVolume }: { flowVolume: number }) =>
      createDispenser({ flowVolume }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dispensers"],
      });
    },
  });
};

export default useCreateDispenser;
