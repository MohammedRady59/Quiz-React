import { useSelector } from "react-redux";

function Progress() {
  const { questions, index, points } = useSelector((state) => state.quiz);
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  return (
    <header className="progress">
      <progress max={questions.length} value={index} />
      <p>
        Question <strong>{index + 1}</strong> / {questions.length}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
