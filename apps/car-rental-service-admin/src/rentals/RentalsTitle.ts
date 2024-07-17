import { Rentals as TRentals } from "../api/rentals/Rentals";

export const RENTALS_TITLE_FIELD = "id";

export const RentalsTitle = (record: TRentals): string => {
  return record.id?.toString() || String(record.id);
};
