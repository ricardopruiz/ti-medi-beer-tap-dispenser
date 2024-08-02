import { Dispenser, DispenserDetails } from "../types/dispenser.types";

const BASE_URL = "http://localhost:8002/api";

// this function helps to reuse code, because all the petitions are very similar
const request = (endpoint: string, init?: RequestInit) =>
  fetch(`${BASE_URL}${endpoint}`, init)
    .then((res) => {
      if (!res.ok) throw new Error(`ERROR ${res.status}: ${res.statusText}`);
      return res.json();
    })
    .catch((error) => {
      throw new Error(error);
    });

export const getDispenser = (
  id: Dispenser["id"]
): Promise<DispenserDetails> => {
  return request(`/dispenser/${id}`);
};

export const getAllDispensers = (): Promise<Dispenser[]> => {
  return request("/dispenser");
};

export const updateDispenserStatus = ({
  id,
  status,
  updated_at,
}: Dispenser) => {
  const body = { status, updated_at };

  return request(`/dispenser/${id}`, {
    method: "put",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createDispenser = ({ flowVolume }: { flowVolume: number }) => {
  const body = { flow_volume: flowVolume };

  return request("/dispenser", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
