import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ServiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <NumberInput
          step={1}
          label="DurationInMinutes"
          source="durationInMinutes"
        />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
