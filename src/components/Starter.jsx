import { useDispatch } from "react-redux";
import { getQues } from "../redux/feature/Quiz/Quiz";

// eslint-disable-next-line react/prop-types
function Starter(/* { setopen, setClose, setnext } */) {
  const dispatch = useDispatch();
  function handle() {
    /*  setopen(true);
    setClose(false);
    setnext(true); */
    dispatch(getQues());
  }
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3> 15 questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => handle()}>
        Let&apos;s start
      </button>
    </div>
  );
}

export default Starter;
