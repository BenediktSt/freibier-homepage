import {Contingent} from '../../models/time-management/contingent.model';

export const mockdata: Array<Contingent> = [
  new Contingent(1, 'Kontingent 1', new Date(2017, 5, 1), new Date(2018, 2, 31), 600, 480),
  new Contingent(2, 'Kontingent 2', new Date(2017, 3, 1), new Date(2017, 11, 31), 300, 75),
  new Contingent(3, 'Kontingent 3', new Date(2017, 9, 1), new Date(2018, 6, 31), 100, 0),
  new Contingent(4, 'Kontingent old', new Date(2017, 0, 1), new Date(2017, 8, 30), 100, 0),
  new Contingent(5, 'Kontingent futur',  new Date(2017, 11, 1), new Date(2018, 6, 31), 800, 0)
];
