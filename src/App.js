import { useEffect, useState, useContext } from "react";
import "./App.css";
import { QuizContext } from "./Context/quiz-context";
import StartQuiz from "./Components/StartQUiz";
import Question from "./Components/Question";

function App() {
  const [isStartQuiz, setStartQuiz] = useState(false);
  const [questions] = useContext(QuizContext);
  const [id, setId] = useState(1);

  function startBtnHandler() {
    setStartQuiz((prevState) => !prevState);
  }

  const questionElement = questions.map((question, index) => {
    return (
      <Question key={index} questionDetails={{ ...question, id: index }} />
    );
  });

  return (
    <main className="quizzical">
      <div className="startQuiz">
        {!isStartQuiz && <StartQuiz flag={startBtnHandler} />}
      </div>
      {isStartQuiz && questionElement}
    </main>
  );
}

export default App;
