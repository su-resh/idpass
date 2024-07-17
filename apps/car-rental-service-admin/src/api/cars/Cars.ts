import { Rentals } from "../rentals/Rentals";

export type Cars = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  make: string | null;
  rentalPricePerDay: number | null;
  model: string | null;
  year: number | null;
  rentalsItems?: Array<Rentals>;
};
