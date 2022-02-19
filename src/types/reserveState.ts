export class ReserveState {
  constructor(
    private _isReserved: boolean,
    private _userId:number,
    private _startUsehour: number,
    private _endUsehour: number,
  ) {}

  public get isReserved(): boolean {
    return this._isReserved;
  }

  public set isReserved(isReserved: boolean) {
    this._isReserved = isReserved;
  }

  public get userId(): number {
    return this._userId;
  }

  public set userId(endUsehour: number) {
    this._userId = endUsehour;
  }

  public get startUsehour(): number {
    return this._startUsehour;
  }

  public set startUsehour(startUsehour: number) {
    this._startUsehour = startUsehour;
  }

  public get endUsehour(): number {
    return this._endUsehour;
  }

  public set endUsehour(endUsehour: number) {
    this._endUsehour = endUsehour;
  }
}
