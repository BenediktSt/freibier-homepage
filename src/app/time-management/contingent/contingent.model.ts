export interface ContingentConfiguration {
  name: string;
  from: Date;
  to: Date;
  size?: number;
  sizeBooked?: number;
  booking?: string;
}

export class Contingent {

  constructor(public _configuration: ContingentConfiguration) {}


  public get name(): string {
    return this._configuration.name;
  }
  public get from(): Date {
    return this._configuration.from;
  }
  public get to(): Date {
    return this._configuration.to;
  }
  public get size(): number {
    return this._configuration.size;
  }
  public get sizeBooked(): number {
    return this._configuration.sizeBooked;
  }
  public get booking(): string {
    return this._configuration.booking;
  }

  public set name(value: string) {
    this._configuration.name = value;
  }
}
