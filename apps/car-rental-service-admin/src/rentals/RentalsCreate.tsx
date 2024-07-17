import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CustomersTitle } from "../customers/CustomersTitle";
import { CarsTitle } from "../cars/CarsTitle";

export const RentalsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="returnDate" source="returnDate" />
        <DateTimeInput label="rentalDate" source="rentalDate" />
        <ReferenceInput
          source="customer.id"
          reference="Customers"
          label="Customer"
        >
          <SelectInput optionText={CustomersTitle} />
        </ReferenceInput>
        <ReferenceInput source="car.id" reference="Cars" label="Car">
          <SelectInput optionText={CarsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
