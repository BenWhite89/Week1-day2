var friends = [`Vanessa`, `Gabriel`, `Heather`, `Otto`, `Mark`];
    

for (j = 0; j < friends.length; j++) {
  console.log(friends[j]);
  
  for (i = 99; i > 2; i--) {
    console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[j]} strikes one out, clears it all out, ${i-1} lines of code in the file.`);
  };

  console.log(`2 lines of code in the file, 2 lines of code; ${friends[j]} strikes one out, clears it all out, 1 line of code in the file.`);
  console.log(`1 line of code in the file, 1 line of code; ${friends[j]} strikes one out, clears it all out, no more lines of code in the file.`);
  
};
