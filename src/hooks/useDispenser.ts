import { useQuery } from "@tanstack/react-query";
import { getDispenser } from "../api/beerTapDispenser";

const useDispenser = (id: string) => {
  const query = useQuery({
    queryKey: ["dispenser", id],
    queryFn: () => getDispenser(id),
  });

  return query;
};

export default useDispenser;
