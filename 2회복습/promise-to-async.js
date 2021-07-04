class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "sophy" && password === "1234") ||
          (id === "coder" && password === "1111")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "sophy") {
          resolve({ name: "sophy", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt(" enter your id");
const password = prompt("enter your password");

async function login() {
  const user = await userStorage.loginUser();
  const role = await userStorage.getRoles(user);
  return role;
}
login()
  .then((user) =>
    alert(`Hello ${user.name}, you have a ${user.role} role 
  `)
  )
  .catch(console.log);
