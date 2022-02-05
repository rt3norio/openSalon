import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ServiceUpdateInput = {
  description?: string | null;
  durationInMinutes?: number | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
