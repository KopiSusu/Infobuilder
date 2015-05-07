var matrix = [];
var rows = 6;
var cols = 5;
var groups = 0;

// create matrix
function generateMatrix() {
  for(var i=0; i<rows; i++) {
    matrix[i] = new Array(cols);
    for(var j=0; j<cols; j++) {
      if (Math.random() < 0.5) {
        matrix[i][j] = 0;
      } else {
        matrix[i][j] = 1;
      }
    }
  }
}

// check for the presence of 1
function findGroups(mat) {
  console.log(matrix);
  for(var i = 0; i< rows; i++) {
    for(var j=0; j<cols; j++) {
      if (mat[i][j] == 1) {
        groups++;
        flipOnes(i,j);
      }
    }
  }
}

// flip adjacent 1's to 0's
function flipOnes(row, column) {
  if (row < 0 || column < 0 || column > cols - 1 || row > rows - 1 || matrix[row][column] == 0 ) {
    return;
  }
  matrix[row][column] = 0;
  flipOnes(row-1, column);
  flipOnes(row+1, column);
  flipOnes(row, column-1);
  flipOnes(row, column+1);
}

generateMatrix();
findGroups(matrix);

console.log(groups);

