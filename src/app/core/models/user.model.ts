import { IUser } from "../interfaces/user.interface";

export class User implements IUser {
  id: number;
  email: string;
  name: string;
  password: string;
  role: string;
  avatar: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
    this.role = user.role;
    this.avatar = user.avatar;
  }

  getSearchValue(){
    return this.name.toLowerCase();
  }
}
