import { LocationsWhereInput } from "./LocationsWhereInput";
import { LocationsOrderByInput } from "./LocationsOrderByInput";

export type LocationsFindManyArgs = {
  where?: LocationsWhereInput;
  orderBy?: Array<LocationsOrderByInput>;
  skip?: number;
  take?: number;
};
