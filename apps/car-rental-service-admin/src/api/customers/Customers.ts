import { Rentals } from "../rentals/Rentals";

export type Customers = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lastName: string | null;
  email: string | null;
  firstName: string | null;
  phoneNumber: string | null;
  rentalsItems?: Array<Rentals>;
};
