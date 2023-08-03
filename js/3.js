const users = [
    { name: 'Vitalii', friend: ["Jason","Jonh", "Mark"] },
    { name: 'Kolya', friend: ["Jack"] },
    { name: 'Anton', friend: ["Ruslan", "Tolya"] },
  ];

  const sortedUsers = users.reduce((acc, user) => {
    const friendCounts = user.friend.length;
    acc.push({ name: user.name, friendCounts });
    return acc;
}, 0);


sortedUsers.sort((a, b) => a.friendCounts - b.friendCounts);

console.log(sortedUsers);


