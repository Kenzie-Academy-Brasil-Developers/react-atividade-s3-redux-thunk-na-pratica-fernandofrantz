import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";

const AddComments = () => {
  const dispatch = useDispatch();
  const coments = useSelector((state) => state.user.comments);

  const [userInput, setUserInput] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          value={userInput}
          onChange={(evt) => setUserInput(evt.target.value)}
        />
        <button onClick={() => dispatch(addCommentThunk(userInput))}>
          New comment
        </button>
        <ul>
          {coments &&
            coments.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </ul>
      </div>
    </>
  );
};
export default AddComments;
