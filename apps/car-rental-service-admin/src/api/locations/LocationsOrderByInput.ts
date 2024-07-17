import { SortOrder } from "../../util/SortOrder";

export type LocationsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  locationName?: SortOrder;
  address?: SortOrder;
};
