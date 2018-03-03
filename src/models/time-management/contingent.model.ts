export interface ContingentConfiguration {
  id: number;
  name: string;
  fromDate: Date;
  toDate: Date;
  size?: number;
  bookedSize?: number;
  bookingId?: string;
}

export class Contingent {

  public id: number;
  public name: string;
  public fromDate: Date;
  public toDate: Date;
  public size?: number;
  public bookedSize?: number;
  public bookingId?: string;


  constructor(id: number, name: string, fromDate: Date, toDate: Date, size: number, bookedSize: number, bookingId: string = 'empty') {
    this.id = id;
    this.name = name;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.size = size;
    this.bookedSize = bookedSize;
    this.bookingId = bookingId;
  }
}
