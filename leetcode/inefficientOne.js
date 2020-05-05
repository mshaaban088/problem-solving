const inefficientOne = function (s) {
  for (let i = 0; i < s.length; ++i) {
    for (let j = i + 1; j < s.length; ++j) {
      if (s[i] == s[j]) return i;
    }
  }
  return -1;
};

const efficientOne = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; ++i) {
    if (!map.has(s[i])) {
      map.set(s[i], { index: i, count: 1 });
    } else {
      map.get(s[i]).count++;
    }
  }

  for (let [_, value] of map) {
    if (value.count > 1) {
      return value.index;
    }
  }
  return -1;
};

console.log(inefficientOne('baab') === efficientOne('baab'));
