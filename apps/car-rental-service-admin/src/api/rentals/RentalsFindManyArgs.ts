import { RentalsWhereInput } from "./RentalsWhereInput";
import { RentalsOrderByInput } from "./RentalsOrderByInput";

export type RentalsFindManyArgs = {
  where?: RentalsWhereInput;
  orderBy?: Array<RentalsOrderByInput>;
  skip?: number;
  take?: number;
};
