import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMERS_TITLE_FIELD } from "../customers/CustomersTitle";
import { CARS_TITLE_FIELD } from "../cars/CarsTitle";

export const RentalsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RentalsItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
