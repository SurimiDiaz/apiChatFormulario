import { getAllUsers, createUser, getOneUser } from "./databse/scrips.js";

const resolvers = {
  Query: {
    getAllUsers: async () => {
      const user = await getAllUsers();
      return user;
    },
    getUser: async (_, args) => {
      const user = await getOneUser(args.id);

      return user[0];
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      const { userName, lastname, motherLastName, birth, email, phone } = args;

      const newUser = {
        userName,
        lastname,
        motherLastName,
        birth,
        email,
        phone,
      };

      const userCreated = await createUser(newUser);

      return userCreated;
    },
  },
};

export default resolvers;
