import { EmployeeWhereInput } from "./EmployeeWhereInput";
import { EmployeeOrderByInput } from "./EmployeeOrderByInput";

export type EmployeeFindManyArgs = {
  where?: EmployeeWhereInput;
  orderBy?: EmployeeOrderByInput;
  skip?: number;
  take?: number;
};
