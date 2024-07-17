import { CustomersWhereInput } from "./CustomersWhereInput";
import { CustomersOrderByInput } from "./CustomersOrderByInput";

export type CustomersFindManyArgs = {
  where?: CustomersWhereInput;
  orderBy?: Array<CustomersOrderByInput>;
  skip?: number;
  take?: number;
};
