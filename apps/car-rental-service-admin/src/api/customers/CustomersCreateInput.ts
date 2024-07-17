import { RentalsCreateNestedManyWithoutCustomersItemsInput } from "./RentalsCreateNestedManyWithoutCustomersItemsInput";

export type CustomersCreateInput = {
  lastName?: string | null;
  email?: string | null;
  firstName?: string | null;
  phoneNumber?: string | null;
  rentalsItems?: RentalsCreateNestedManyWithoutCustomersItemsInput;
};
