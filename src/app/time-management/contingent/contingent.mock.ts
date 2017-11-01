import {Contingent} from './contingent.model';

export const mockdata: Array<Contingent> = [
  new Contingent({name: 'Kontingent 1', from: new Date(2017, 5, 1), to: new Date(2018, 2, 31), size: 600, sizeBooked: 480}),
  new Contingent({name: 'Kontingent 2', from: new Date(2017, 3, 1), to: new Date(2017, 11, 31), size: 300, sizeBooked: 75}),
  new Contingent({name: 'Kontingent 3', from: new Date(2017, 9, 1), to: new Date(2018, 6, 31)}),
  new Contingent({name: 'Kontingent old', from: new Date(2017, 0, 1), to: new Date(2017, 8, 30)}),
  new Contingent({name: 'Kontingent futur', from: new Date(2017, 11, 1), to: new Date(2018, 6, 31), size: 800, sizeBooked: 0})
];
