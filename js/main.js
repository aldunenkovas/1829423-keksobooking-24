// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D0%B5_%D0%B2%D0%BA%
function getRandomInt(from, to) {
  if (from === to) {
    return from;
  }
  if (from >= 0 && to >=0 && from <= to) {
    from = Math.ceil(from);
    to = Math.floor(to);
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
  return -1;
}

function getRandomFloat(from, to, signsAfterDot) {
  if (from === to) {
    return from;
  }
  if (from >= 0 && to >= 0 && from <= to) {
    const randomFloat = Math.random() * (to - from + 1) + from;
    return parseFloat(randomFloat.toFixed(signsAfterDot));
  }
  return -1;
}

getRandomInt(-5, 0);
getRandomFloat(500, 500, 5);

