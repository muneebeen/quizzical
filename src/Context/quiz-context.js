import { createContext, useContext, useEffect, useState } from "react";

export const QuizContext = createContext({
  questions: [],
});

export const QuizContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => {
        return setQuestions(data.results);
      });
  }, []);

  const value = [questions];

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

// export const useQuizContext = () => {
//   return useContext(quizContext);
// };
