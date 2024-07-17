import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LocationsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="locationName" source="locationName" />
        <TextInput label="address" multiline source="address" />
      </SimpleForm>
    </Edit>
  );
};
