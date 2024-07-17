import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RentalsListRelationFilter } from "../rentals/RentalsListRelationFilter";

export type CustomersWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  rentalsItems?: RentalsListRelationFilter;
};
