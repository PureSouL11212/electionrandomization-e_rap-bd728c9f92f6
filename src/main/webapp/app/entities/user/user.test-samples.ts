import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 10015,
  login: 'fC@uOA4\\EXjM\\Fle\\27f4\\tiUc26',
};

export const sampleWithPartialData: IUser = {
  id: 13303,
  login: 'k',
};

export const sampleWithFullData: IUser = {
  id: 1174,
  login: 'EP',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
