import { type Writable, writable } from "svelte/store";

type StoreType = Writable<Map<User["email"], User["password"]>>;

const store: StoreType = writable(new Map());

export default {
  subscribe: store.subscribe,
  add: (user: User) => {
    store.update((users) => {
      return users.set(user.email, user.password);
    });
    return user;
  },
  delete: (email: User["email"]) => {
    let isDeleted = false;
    store.update((users) => {
      isDeleted = users.delete(email);
      return users;
    });
    return isDeleted;
  },
  find: (email: User["email"]) => {
    let user: User | undefined;

    store.update((users) => {
      const password = users.get(email);

      if (password) {
        user = { email, password };
      }

      return users;
    });

    return user;
  },
  clear: () => store.set(new Map()),
};
