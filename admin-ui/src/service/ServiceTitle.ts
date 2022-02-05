import { Service as TService } from "../api/service/Service";

export const SERVICE_TITLE_FIELD = "name";

export const ServiceTitle = (record: TService): string => {
  return record.name || record.id;
};
