import { getConnectionOptions, createConnection } from "typeorm";
import { User } from "../entity/User";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return process.env.NODE_ENV === 'production'
    ? createConnection({
      ...connectionOptions,
      url: process.env.DATABASE_URL as string,
      name: "default",
      entities: [User]
    } as any)
    : createConnection({ ...connectionOptions, name: "default" });
};
