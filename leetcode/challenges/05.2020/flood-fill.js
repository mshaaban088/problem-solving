const di = [-1, +1, 0, 0];
const dj = [0, 0, -1, +1];

const isValidMove = function (image, visited, i, j, color) {
  if (i < 0 || i >= image.length) return false;
  if (j < 0 || j >= image[i].length) return false;
  if (visited[i][j]) return false;
  if (image[i][j] !== color) return false;
  return true;
};

const emptyImage = function (n, m) {
  const image = Array(n);

  for (let i = 0; i < n; ++i) {
    image[i] = Array(m).fill(0);
  }

  return image;
};

const _floodFill = function (image, visited, i, j, currentColor, newColor) {
  visited[i][j] = 1;
  image[i][j] = newColor;

  for (let k = 0; k < di.length; ++k) {
    const newI = i + di[k];
    const newJ = j + dj[k];

    if (isValidMove(image, visited, newI, newJ, currentColor)) {
      _floodFill(image, visited, newI, newJ, currentColor, newColor);
    }
  }
  return image;
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, newColor) {
  if (!image.length || !image[0].length) {
    return image;
  }

  const visited = emptyImage(image.length, image[0].length);
  const currentColor = image[sr][sc];

  return _floodFill(image, visited, sr, sc, currentColor, newColor);
};

const isEqual = (image1, image2) => {
  if (image1.length !== image2.length) return false;

  for (let i = 0; i < image1.length; i++) {
    for (let j = 0; j < image1[i].length; j++) {
      if (image1[i][j] !== image2[i][j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(
  isEqual(
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    ),
    [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]
  )
);
