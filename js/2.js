const users = [
    { name: 'Vitalii', friend: ["Jason","Jonh", "Mark"] },
    { name: 'Kolya', friend: ["Jack"] },
    { name: 'Anton', friend: ["Ruslan", "Tolya"] },
  ];

const findFriendName = 'Jack';
const usersWithFriend = users.reduce((acc, user) => {
    const foundFriend = user.friend.find(friendName => friendName === findFriendName);
    if (foundFriend) {
        acc.push(user.name);
    }
    return acc;
}, []);

console.log(usersWithFriend);