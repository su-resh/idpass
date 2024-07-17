import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { CarsWhereUniqueInput } from "../cars/CarsWhereUniqueInput";

export type RentalsWhereInput = {
  id?: StringFilter;
  returnDate?: DateTimeNullableFilter;
  rentalDate?: DateTimeNullableFilter;
  customer?: CustomersWhereUniqueInput;
  car?: CarsWhereUniqueInput;
};
