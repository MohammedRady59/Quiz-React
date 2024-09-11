import Header from "./components/Header";
import Main from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import { getQues, nextQ } from "./redux/feature/Quiz/Quiz";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Starter from "./components/Starter";
import Questions from "./components/Questions";

function App() {
  const { loading, questions, error } = useSelector((state) => state.quiz);
  const [open, setopen] = useState(false);
  const [next, setnext] = useState(false);
  const [closeStart, setClose] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQues());
  }, [dispatch]);
  if (error) return <Error />;
  return (
    <>
      <div className="app">
        <Header />
        <Main>
          {loading ? (
            <Loader />
          ) : (
            <>
              {closeStart && (
                <Starter
                  setopen={setopen}
                  setClose={setClose}
                  setnext={setnext}
                />
              )}
              {open && questions && <Questions />}
              {next && (
                <button
                  className="btn btn-ui"
                  onClick={() => dispatch(nextQ())}
                >
                  Next
                </button>
              )}
            </>
          )}
        </Main>
      </div>
    </>
  );
}

export default App;
