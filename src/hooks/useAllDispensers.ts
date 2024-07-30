import { useQuery } from "@tanstack/react-query";
import { getAllDispensers } from "../api/beerTapDispenser";

const useAllDispensers = () => {
  // The most optimal thing would be a websocket to show real time data
  // but since we do not have a websocket, we are refetching the
  // data periodically
  const query = useQuery({
    queryKey: ["dispensers"],
    queryFn: () => getAllDispensers(),
    retry: 2,
    refetchInterval: 2000,
  });

  return query;
};

export default useAllDispensers;
