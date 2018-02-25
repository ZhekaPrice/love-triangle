/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var numberOfTreug = 0, first, second, third ;
  for (i = 0; i < preferences.length; i++)
  {
    first = preferences[i];
    second = first - 1;
    third = preferences[second]-1;
    if ((third != second) && ((preferences[third] - 1) == i ))
      numberOfTreug++;
  };
  numberOfTreug /= 3;
  return numberOfTreug;
};
