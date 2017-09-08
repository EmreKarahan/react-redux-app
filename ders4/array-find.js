const users = [
  {
    id: 1,
    username: 'emre',
  },
  {
    id: 2,
    username: 'eren',
  },
  {
    id: 3,
    username: 'bahar',
  },
  {
    id: 4,
    username: 'badit',
  },
];

const user = users.find(item => item.username == 'emre');
console.log(user);
