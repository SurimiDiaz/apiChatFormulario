import pool from "../databse/mysql.js";

export const getAllUsers = () => {
  const users = pool.query("SELECT * FROM users_test_lauraSurimi");
  return users;
};

export const createUser = (user) => {
  const newUser = pool.query("INSERT INTO users_test_lauraSurimi set ?", [
    user,
  ]);
  return newUser;
};

export const getOneUser = (id) => {
  const users = pool.query(
    "SELECT * FROM `users_test_lauraSurimi` WHERE `id` = ?",
    [id]
  );

  return users;
};
