# Knight's Shortest Path Finder

This project calculates the shortest path a knight can take on a standard 8x8 chessboard from a given starting position to an ending position. It uses the knight's unique movement pattern and a breadth-first search (BFS) algorithm to find the minimum number of moves.

## Features

- **Start & End Positions**: Input starting and ending positions on an 8x8 board.
- **Move Calculation**: Calculates the fewest number of moves required for the knight to reach the destination.
- **Path Display**: Outputs the exact sequence of moves made by the knight.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gamwal/top-knight-travails.git
   ```
2. Run the script:
   ```bash
   node knightMoves.js
   ```

## Example Usage

```javascript
console.log(knightMoves([3, 3], [4, 3]));
```

Output:

```
=> You made it in 3 moves! Here's your path
[3, 3]
[5, 4]
[3, 5]
[4, 3]
```

## Requirements

- Node.js

## License

This project is open-source.
