import users from '../data/users';
setTimeout(() => {
  console.log(`Задача 2`);
}, 2250);
const toggleUserState = (allUsers, userName) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve(allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
    ));
    },2500)
  });
  return promise;
};
const logger = updatedUsers => console.table(updatedUsers);
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);