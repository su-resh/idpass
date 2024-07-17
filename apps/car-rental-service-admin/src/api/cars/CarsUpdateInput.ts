import { RentalsUpdateManyWithoutCarsItemsInput } from "./RentalsUpdateManyWithoutCarsItemsInput";

export type CarsUpdateInput = {
  make?: string | null;
  rentalPricePerDay?: number | null;
  model?: string | null;
  year?: number | null;
  rentalsItems?: RentalsUpdateManyWithoutCarsItemsInput;
};
