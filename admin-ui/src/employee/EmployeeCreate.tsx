import * as React from "react";
import { Create, SimpleForm, CreateProps, BooleanInput } from "react-admin";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="admin" source="admin" />
      </SimpleForm>
    </Create>
  );
};
