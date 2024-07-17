import { RentalsUpdateManyWithoutCustomersItemsInput } from "./RentalsUpdateManyWithoutCustomersItemsInput";

export type CustomersUpdateInput = {
  lastName?: string | null;
  email?: string | null;
  firstName?: string | null;
  phoneNumber?: string | null;
  rentalsItems?: RentalsUpdateManyWithoutCustomersItemsInput;
};
