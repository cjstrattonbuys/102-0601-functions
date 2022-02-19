var startMyDay = function () {
  return `Time for coffee and meditation!`;
};
console.log(startMyDay());

var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie("molasses"));

var introduce = function (name, occupation) {
  return `My name is ${name} and I'm a ${occupation}, nice to meet you!`;
};
console.log(introduce("CJ", "programmer"));
console.log(introduce("Meg", "Disney cast member"));

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    return `Congrats, your water intake is great!`;
  } else if (numGlasses < 8) {
    return `Not bad, not bad. Let’s try for a bit more tomorrow!`;
  }
};
console.log(hydrationFeedback());
