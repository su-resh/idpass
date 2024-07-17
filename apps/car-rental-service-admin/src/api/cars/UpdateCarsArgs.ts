import { CarsWhereUniqueInput } from "./CarsWhereUniqueInput";
import { CarsUpdateInput } from "./CarsUpdateInput";

export type UpdateCarsArgs = {
  where: CarsWhereUniqueInput;
  data: CarsUpdateInput;
};
