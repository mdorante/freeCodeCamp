var count = 0;

function cc(card) {
  // Only change code below this line
  var cards = [[2, 3, 4, 5, 6], [7, 8, 9], [10, 'J', 'Q', 'K', 'A']];
  var action;

  if (cards[0].includes(card)) {
    count +=1;
  } else if (cards[2].includes(card)) {
    count -= 1;
  }

  if (count > 0) {
    action = "Bet";
  } else {
    action = "Hold";
  }
  
  return count + " " + action;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
