import { SortOrder } from "../../util/SortOrder";

export type RentalsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  returnDate?: SortOrder;
  rentalDate?: SortOrder;
  customerId?: SortOrder;
  carId?: SortOrder;
};
