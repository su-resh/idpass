import { CarsWhereInput } from "./CarsWhereInput";
import { CarsOrderByInput } from "./CarsOrderByInput";

export type CarsFindManyArgs = {
  where?: CarsWhereInput;
  orderBy?: Array<CarsOrderByInput>;
  skip?: number;
  take?: number;
};
