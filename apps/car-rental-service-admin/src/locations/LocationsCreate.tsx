import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LocationsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="locationName" source="locationName" />
        <TextInput label="address" multiline source="address" />
      </SimpleForm>
    </Create>
  );
};
