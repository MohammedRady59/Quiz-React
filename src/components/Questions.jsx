import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../redux/feature/Quiz/Quiz";
import Progress from "./Progress";
import FinshQuiz from "./FinshQuiz";

function Questions() {
  const { questions, index, answer } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  if (index >= 15) return <FinshQuiz />;
  return (
    <div>
      <Progress />
      <h4>{questions[index].question}</h4>
      <div className="options">
        {questions[index].options.map((el, idx) => (
          <button
            disabled={answer !== null}
            className={`btn btn-option ${idx === answer ? "answer" : ""} ${
              answer !== null &&
              (questions[index].correctOption === idx ? "correct" : "wrong")
            } `}
            key={el}
            onClick={() => dispatch(addAnswer(idx))}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Questions;
