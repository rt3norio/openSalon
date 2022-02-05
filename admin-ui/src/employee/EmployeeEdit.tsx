import * as React from "react";
import { Edit, SimpleForm, EditProps, BooleanInput } from "react-admin";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="admin" source="admin" />
      </SimpleForm>
    </Edit>
  );
};
