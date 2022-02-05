import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeUpdateInput } from "./EmployeeUpdateInput";

export type UpdateEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
  data: EmployeeUpdateInput;
};
