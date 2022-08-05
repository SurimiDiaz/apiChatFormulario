import pool from "../databse/mysql.js";

export const getAllUsers = async () => {
  const users = await pool.query("SELECT * FROM users_test_lauraSurimi");

  return users;
};

export const createUser = async (user) => {
  const newUser = await pool.query("INSERT INTO users_test_lauraSurimi set ?", [
    user,
  ]);

  return "ok";
};

export const getOneUser = async (id) => {
  const users = await pool.query(
    "SELECT * FROM `users_test_lauraSurimi` WHERE `id` = ?",
    [id]
  );

  return users;
};
