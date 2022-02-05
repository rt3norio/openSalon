import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ServiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <NumberInput
          step={1}
          label="DurationInMinutes"
          source="durationInMinutes"
        />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
