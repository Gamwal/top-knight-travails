function knightMoves(startArray, endArray) {
  const possibleMoves = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];

  if (
    startArray[0] < 0 ||
    startArray[0] > 7 ||
    startArray[1] < 0 ||
    startArray[1] > 7 ||
    endArray[0] < 0 ||
    endArray[0] > 7 ||
    endArray[1] < 0 ||
    endArray[1] > 7
  )
    return null;

  if (startArray[0] === endArray[0] && startArray[1] === endArray[1])
    return endArray;

  let moves = [];
  moves.push([startArray]);

  while (moves.length > 0) {
    let temp = [];
    for (let move of moves) {
      for (let possibleMove of possibleMoves) {
        let xCoord = move[move.length - 1][0] + possibleMove[0];
        let yCoord = move[move.length - 1][1] + possibleMove[1];
        if (xCoord >= 0 && xCoord < 8) {
          if (yCoord >= 0 && yCoord < 8) {
            const hold = [...move];
            hold.push([xCoord, yCoord]);
            temp.push(hold);
          }
        }
      }
    }
    for (let path of temp) {
      if (path[path.length - 1][0] === endArray[0]) {
        if (path[path.length - 1][1] === endArray[1]) {
          console.log(
            `=> You made it in ${path.length - 1} moves! Here's your path`
          );
          for (let pos of path) {
            console.log(`[${pos[0]},${pos[1]}]`);
          }
          return;
        }
      }
    }
    moves = temp;
  }
}

knightMoves([3, 3], [4, 3]);
