const checkAnswers = (props) => {
  return (
    <div>
      <button onClick={() => props.checkAnswers()}>Check Answers</button>
    </div>
  );
};
export default checkAnswers;
