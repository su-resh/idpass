import { SortOrder } from "../../util/SortOrder";

export type CustomersOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  phoneNumber?: SortOrder;
};
