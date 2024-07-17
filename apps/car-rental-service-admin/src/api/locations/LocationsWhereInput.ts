import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LocationsWhereInput = {
  id?: StringFilter;
  locationName?: StringNullableFilter;
  address?: StringNullableFilter;
};
