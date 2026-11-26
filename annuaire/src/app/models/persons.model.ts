export type Person = {
  login: { uuid: string };
  name: { last: string; first: string };
  gender: 'male | female';
  location: {
    city: string;
    state: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  email: string;
  phone: string;
  cell: string;
  dob: { age: number };
  nat: string;
};

export type PersonResponse = {
  results: Person[];
  seed: string;
  page: number;
};
