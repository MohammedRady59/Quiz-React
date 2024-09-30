import { useSelector } from "react-redux";

function Progress() {
  const { questions, index, points } = useSelector((state) => state.quiz);
  const { questions: question } = questions;

  const maxPossiblePoints = question.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  return (
    <header className="progress">
      <progress max={question.length} value={index} />
      <p>
        Question <strong>{index + 1}</strong> / {question.length}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
