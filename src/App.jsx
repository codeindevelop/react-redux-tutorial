import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  // Access to redux store
  const { adad } = useSelector((state) => ({
    adad: state.calc.adad,
  }));

  return (
    <div>
      <h2>app</h2>

      <h2>عدد ما {adad}</h2>

      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT_ADAD",
          })
        }
      >
        اضافه کردن
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT_ADAD",
          })
        }
      >
        کم کردن
      </button>
    </div>
  );
}
