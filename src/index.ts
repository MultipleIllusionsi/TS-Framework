import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserProps, User } from "./models/User";

const baseUrl = "http://localhost:3000/users";

const users = new Collection(baseUrl, (json: UserProps) => {
  return User.buildUser(json);
});

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
