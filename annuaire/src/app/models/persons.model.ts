export type Person = {
  login: { uuid: string };
  name: { last: string; first: string };
  gender: 'male | female';
  location: {
    city: string;
  };
  picture: { medium: string };
  email: string;
  phone: string;
  mobile: string;
  dob: { age: number };
  nat: string;
};

export type PersonResponse = {
  results: Person[];
  seed: string;
  page: number;
};
