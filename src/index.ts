import { User } from "./models/User";

const user = new User({ name: "New Name", age: 999 });

user.save();
