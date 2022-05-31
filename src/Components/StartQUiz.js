const StartQuiz = (props) => {
  function startBtnClick() {
    props.flag();
  }

  return (
    <div className="quizzical--section">
      <h1 className="title">Quizzical</h1>
      <p>LET'S BEGIN THE FUN</p>
      <button className="btn--start" onClick={startBtnClick}>
        Start Quiz
      </button>
    </div>
  );
};
export default StartQuiz;
