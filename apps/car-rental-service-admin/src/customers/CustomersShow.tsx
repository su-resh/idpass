import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMERS_TITLE_FIELD } from "./CustomersTitle";
import { CARS_TITLE_FIELD } from "../cars/CarsTitle";

export const CustomersShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="lastName" source="lastName" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <ReferenceManyField
          reference="Rentals"
          target="customerId"
          label="RentalsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="returnDate" source="returnDate" />
            <TextField label="rentalDate" source="rentalDate" />
            <ReferenceField
              label="Customer"
              source="customers.id"
              reference="Customers"
            >
              <TextField source={CUSTOMERS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Car" source="cars.id" reference="Cars">
              <TextField source={CARS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
