import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ServiceCreateInput = {
  description?: string | null;
  durationInMinutes?: number | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
