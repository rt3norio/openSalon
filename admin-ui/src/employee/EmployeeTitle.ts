import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "id";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.id || record.id;
};
