import { atom } from 'nanostores';

const users = atom([
    {
      name: 'Imanadmin',
      age: 2,
      isAdmin: true,
    },
    {
      name: 'Imnotadmin',
      age: 35,
      isAdmin: false,
    },
    {
      name: 'Wowsomuchadmin',
      age: 3634,
      isAdmin: true,
    },
  ]);

export { users };
