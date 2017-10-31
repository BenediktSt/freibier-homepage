export interface ContingentConfiguration {
  name: string;
  from: Date;
  to: Date;
  size?: number;
  sizeBooked?: number;
  booking?: string;
}

export class Contingent {

  constructor(public configuration: ContingentConfiguration) {}


  public get name(): string {
    return this.configuration.name;
  }
  public get from(): Date {
    return this.configuration.from;
  }
  public get to(): Date {
    return this.configuration.to;
  }
  public get size(): number {
    return this.configuration.size;
  }
  public get sizeBooked(): number {
    return this.configuration.sizeBooked;
  }
  public get booking(): string {
    return this.configuration.booking;
  }
}
