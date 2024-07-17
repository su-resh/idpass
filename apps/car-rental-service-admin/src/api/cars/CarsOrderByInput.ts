import { SortOrder } from "../../util/SortOrder";

export type CarsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  make?: SortOrder;
  rentalPricePerDay?: SortOrder;
  model?: SortOrder;
  year?: SortOrder;
};
