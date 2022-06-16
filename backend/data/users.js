import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Ali the Admin",
    email: "admin@gmail.com",
    password: bcryptjs.hashSync("2580123", 10),
    isAdmin: true,
  },
  {
    name: "Adil",
    email: "adil@gmail.com",
    password: bcryptjs.hashSync("2580123", 10),
  },
  {
    name: "Ali Imran",
    email: "Imran@gmail.com",
    password: bcryptjs.hashSync("2580123", 10),
  },
];

export default users;
