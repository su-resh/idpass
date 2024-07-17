import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RentalsTitle } from "../rentals/RentalsTitle";

export const CarsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="make" source="make" />
        <NumberInput label="rentalPricePerDay" source="rentalPricePerDay" />
        <TextInput label="model" source="model" />
        <NumberInput step={1} label="year" source="year" />
        <ReferenceArrayInput
          source="rentalsItems"
          reference="Rentals"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RentalsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
