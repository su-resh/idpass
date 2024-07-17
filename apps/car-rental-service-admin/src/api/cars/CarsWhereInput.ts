import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RentalsListRelationFilter } from "../rentals/RentalsListRelationFilter";

export type CarsWhereInput = {
  id?: StringFilter;
  make?: StringNullableFilter;
  rentalPricePerDay?: FloatNullableFilter;
  model?: StringNullableFilter;
  year?: IntNullableFilter;
  rentalsItems?: RentalsListRelationFilter;
};
