export class ReserveState {
  constructor(
    private _isReserved: boolean,
    private _startUseDay: number,
    private _endUseDay: number
  ) {}

  public get isReserved(): boolean {
    return this._isReserved;
  }

  public set isReserved(isReserved: boolean) {
    this._isReserved = isReserved;
  }

  public get startUseDay(): number {
    return this._startUseDay;
  }

  public set startUseDay(startUseDay: number) {
    this._startUseDay = startUseDay;
  }

  public get endUseDay(): number {
    return this._endUseDay;
  }

  public set endUseDay(endUseDay: number) {
    this._endUseDay = endUseDay;
  }
}
