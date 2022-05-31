import { useEffect, useState } from "react";
const Question = (props) => {
  const [selectedOption, setselectedOption] = useState("");
  const [wrongAnsFlag, setWrongAnsFlag] = useState(true);
  const [answerElement, setAnserElement] = useState(null);

  const questionDetails = props.questionDetails;
  const correct_answer = questionDetails.correct_answer;
  const options = questionDetails.incorrect_answers;

  useEffect(() => {
    const temp = options.splice(
      Math.floor(Math.random() * 3),
      0,
      correct_answer
    );

    const answerEl = options.map((option, id) => {
      return (
        <span key={id} className="option" id={id}>
          <label htmlFor="option">{option}</label>
          <input
            type="radio"
            name="option"
            id="option"
            onClick={optionClickHandler}
            value={option}
          />
        </span>
      );
    });
    setAnserElement(answerEl);
    // console.log(options);
  }, []);

  const optionClickHandler = (event) => {
    let el = event.target;
    let arr = el.parentElement.closest(".options--section");
    arr.childNodes.forEach((el) => {
      el.classList.remove("right", "wrong");
    });

    const selectedOption = el.value;
    setselectedOption(selectedOption);
    if (selectedOption != correct_answer) {
      el.parentElement.classList.toggle("wrong");
    } else {
      el.parentElement.classList.toggle("right");
    }
  };

  return (
    <div className="question--section">
      <div className="question" id={questionDetails.id}>
        {<h2>{questionDetails.question}</h2>}
      </div>
      {
        <div className="options--section" id={questionDetails.id}>
          {answerElement}
        </div>
      }
    </div>
  );
};
export default Question;

// const correctAnswer = quesDetails.correct_answer;
// const options = { ...quesDetails };
// const option = options.incorrect_answers.splice(
//   Math.floor(Math.random() * quesDetails.incorrect_answers.length - 1),
//   0,
//   quesDetails.correct_answer
// );

// const allOptions = options.incorrect_answers.filter(
//   (v, i, a) => a.indexOf(v) === i
// );

// const answerElement = allOptions.map((options, id) => (
//   <span key={id} className="option" id="option" onClick={optionClickHandler}>
//     {options}
//   </span>
// ));
// // console.log(answerElement);
// function optionClickHandler(event) {
//   setWrongAnsFlag(true);
//   setselectedOption(event.target.outerText);
//   event.target.classList.toggle("selected");
//   if (selectedOption != correctAnswer) {
//     setWrongAnsFlag(false);
//     event.target.classList.add("wrong");
//   }

//   //const elem = document.getElementsByClassName("option");
//   // [...elem.children].forEach((element) => {
//   //   console.log(element);
//   // });
// }

// console.log(selectedOption);
