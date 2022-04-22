/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};
let generateExcuse = function() {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comdian", "pincone"];
  let action = ["throw my", "took my", "stole my"];
  let possetion = ["homework", "pizza", "game", "shirt"];
  let where = ["in my home", "in the yard", "in the car", "somewhere"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let possIndx = Math.floor(Math.random() * possetion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndx] +
    " " +
    possetion[possIndx] +
    " " +
    where[whereIndx]
  );
};
