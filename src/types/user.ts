import { Tool } from "@/types/tool";

export class User {
  constructor(
    private _id: number,
    private _name: string,
    private _mailAddress: string,
    private _password: string,
    private _depId: number,
    private _reserveTools: Array<Tool>
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get mailAddress(): string {
    return this._mailAddress;
  }

  public set mailAddress(mailAddress: string) {
    this._mailAddress = mailAddress;
  }

  public get password(): string {
    return this._password;
  }

  public set password(password: string) {
    this._password = password;
  }

  public get depId(): number {
    return this._depId;
  }

  public set depId(depId: number) {
    this._depId = depId;
  }

  public get reserveTools(): Array<Tool> {
    return this._reserveTools;
  }

  public set reserveTools(reserveTools: Array<Tool>) {
    this._reserveTools = reserveTools;
  }
}
