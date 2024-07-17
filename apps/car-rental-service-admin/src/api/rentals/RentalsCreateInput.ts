import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { CarsWhereUniqueInput } from "../cars/CarsWhereUniqueInput";

export type RentalsCreateInput = {
  returnDate?: Date | null;
  rentalDate?: Date | null;
  customer?: CustomersWhereUniqueInput | null;
  car?: CarsWhereUniqueInput | null;
};
