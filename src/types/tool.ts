import { ReserveState } from "@/types/reserveState";

export class Tool {
  constructor(
    private _id: number,
    private _name: string,
    private _image: string,
    private _reserveArray: Array<ReserveState>
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

  public get image(): string {
    return this._image;
  }

  public set image(image: string) {
    this._image = image;
  }

  public get reserveArray(): Array<ReserveState> {
    return this._reserveArray;
  }

  public set reserveArray(reserveArray: Array<ReserveState>) {
    this._reserveArray = reserveArray;
  }
}
