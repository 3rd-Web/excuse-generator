import "./style.css";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["dog", "spy", "ant", "cow", "Uber driver", "alien"];
  let action = [
    "stole my",
    "hid my",
    "ran away with my",
    "laughed at my",
    "ate my"
  ];
  let item = ["keys", "beer", "phone", "computer", "cousin"];
  let where = [
    "at the pool",
    "in my grandmother's house",
    "at the club",
    "in the bathroom",
    "in Mexico"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let itemIndex = Math.floor(Math.random() * item.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    item[itemIndex] +
    " " +
    where[whereIndex]
  );
};
