import { useDispatch, useSelector } from "react-redux";
import { restartQ } from "../redux/feature/Quiz/Quiz";

function FinshQuiz() {
  const { questions, points } = useSelector((state) => state.quiz);
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  const percentage = (points / maxPossiblePoints) * 100;
  const dispatch = useDispatch();
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>

      <button className="btn btn-ui" onClick={() => dispatch(restartQ())}>
        Restart quiz
      </button>
    </>
  );
}

export default FinshQuiz;
