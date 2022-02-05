import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CPF" source="cpf" />
        <TextInput
          label="Extra Information"
          multiline
          source="extraInformation"
        />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone Number" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
