import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '279b3fe5-f930-45c5-9c82-f78558a17cf6',
};

export const sampleWithPartialData: IAuthority = {
  name: '0955176d-eb11-4252-b1c5-84ae18a6d1ab',
};

export const sampleWithFullData: IAuthority = {
  name: '2efaf17a-ca2a-4957-9b76-551a37b30fb1',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
