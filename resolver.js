import { getAllUsers, createUser, getOneUser } from "./databse/scrips.js";

const resolvers = {
  Query: {
    getAllUsers: async () => {
      const user = await getAllUsers();
      console.log(user);
      return user;
    },
    getUser: async (_, args) => {
      const user = await getOneUser(args.id);

      return user[0];
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      const {
        userName,
        middleName,
        lastname,
        motherLastName,
        birth,
        email,
        phone,
      } = args;

      const newUser = {
        userName,
        middleName,
        lastname,
        motherLastName,
        birth,
        email,
        phone,
      };

      const userCreated = await createUser(newUser);
      console.log(userCreated);
      return userCreated;
    },
  },
};

export default resolvers;
