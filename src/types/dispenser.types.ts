export type Dispenser = {
  id: string;
  status: "open" | "close";
  updated_at: Date;
};

type DispenserUsage = {
  opened_at: Date;
  closed_at: Date;
  flow_volume: number;
  total_spent: number;
};

export type DispenserDetails = {
  amount: number;
  usages: DispenserUsage[];
};
