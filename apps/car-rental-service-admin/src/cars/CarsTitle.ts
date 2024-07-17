import { Cars as TCars } from "../api/cars/Cars";

export const CARS_TITLE_FIELD = "make";

export const CarsTitle = (record: TCars): string => {
  return record.make?.toString() || String(record.id);
};
