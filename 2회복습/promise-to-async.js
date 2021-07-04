class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "sophy" && password === "1234") ||
          (id === "coder" && password === "1111")
        ) {
          resolve(id);
        }
      }, 2000);
    });
  }
  async getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "sophy") {
          resolve({ name: "sophy", role: "admin" });
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt(" enter your id");
const password = prompt("enter your password");

async function login(id, password) {
  const user = await userStorage.loginUser(id, password);
  const role = await userStorage.getRoles(user);
  return role;
}
login(id, password).then((user) =>
  alert(`Hello ${user.name}, you have a ${user.role} role 
  `)
);
