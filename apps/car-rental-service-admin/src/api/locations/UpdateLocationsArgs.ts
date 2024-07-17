import { LocationsWhereUniqueInput } from "./LocationsWhereUniqueInput";
import { LocationsUpdateInput } from "./LocationsUpdateInput";

export type UpdateLocationsArgs = {
  where: LocationsWhereUniqueInput;
  data: LocationsUpdateInput;
};
