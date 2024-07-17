import { RentalsCreateNestedManyWithoutCarsItemsInput } from "./RentalsCreateNestedManyWithoutCarsItemsInput";

export type CarsCreateInput = {
  make?: string | null;
  rentalPricePerDay?: number | null;
  model?: string | null;
  year?: number | null;
  rentalsItems?: RentalsCreateNestedManyWithoutCarsItemsInput;
};
