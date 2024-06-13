import { RowDataPacket } from "mysql2";

export interface User extends RowDataPacket {
  username: string;
  password: string;
  email: string;
  birthday: string;
  pfp_path: string;
}
