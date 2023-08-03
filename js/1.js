
const users = [
    { name: 'Vitalii', balance: 100 },
    { name: 'Kolya', balance: 200 },
    { name: 'Anton', balance: 300 },
  ];
  
  const totalBalances = users.reduce((accumulator, {balance}) => accumulator + balance, 0);
  
  console.log("Загальний баланс:", totalBalances);

