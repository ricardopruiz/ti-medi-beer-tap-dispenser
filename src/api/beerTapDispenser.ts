import { Dispenser } from "../types/dispenser.types";

const BASE_URL = "http://localhost:8002/api";

export const getDispenser = (id: Dispenser["id"]) => {
  return fetch(`${BASE_URL}/dispenser/${id}`)
    .then((res) => {
      if (res.status == 422)
        throw new Error(`ERROR ${res.status}: ${res.statusText}`);
      return res.json();
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const getAllDispensers = () => {
  return fetch(`${BASE_URL}/dispenser`)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const updateDispenserStatus = ({
  id,
  status,
  updated_at,
}: Dispenser) => {
  const body = { status, updated_at };

  return fetch(`${BASE_URL}/dispenser/${id}`, {
    method: "put",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 422)
        throw new Error(`ERROR ${res.status}: ${res.statusText}`);
      return res.json();
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const createDispenser = ({ flowVolume }: { flowVolume: number }) => {
  const body = { flow_volume: flowVolume };

  return fetch(`${BASE_URL}/dispenser`, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 422)
        throw new Error(`ERROR ${res.status}: ${res.statusText}`);
      return res.json();
    })
    .catch((error) => {
      throw new Error(error);
    });
};
