import { Customers } from "../customers/Customers";
import { Cars } from "../cars/Cars";

export type Rentals = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  returnDate: Date | null;
  rentalDate: Date | null;
  customer?: Customers | null;
  car?: Cars | null;
};
