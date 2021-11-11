import { useTask } from "../../contexts/task-context";
import "./input-card.css";
export function InputCard({ inputRef, focusRef }) {
  const { state, dispatch } = useTask();
  return (
    // /* card comp where edit and writing task happens */
    <div className="card-container">
      <div className="card" ref={inputRef}>
        <div className="container__title">
          <input
            type="text"
            className="title  outline card--background"
            value={state.task.title}
            ref={focusRef}
            placeholder="Title"
            onClick={() => {
              console.log(`task from input-card line 20: ${state.task}`);
              dispatch({ type: "SHOW_CARD", payload: "show" });
            }}
            onKeyDown={(e) => {
              dispatch({ type: "SHOW_CARD", payload: "show" });
            }}
            onChange={(e) => {
              dispatch({ type: "TITLE_INPUT", payload: e.target.value });
            }}
          />
          <span className="align-right">
            <i class="fas fa-thumbtack "></i>
          </span>
        </div>

        {state.showCard && (
          <input
            type="textfield"
            className="note  outline card--background"
            id="note"
            autoFocus={true}
            value={state.task.note}
            placeholder="Take a note..."
            onKeyPress={(e) => {
              if (e.key !== "Enter") {
                return;
              } else {
                dispatch({ type: "SHOW_CARD", payload: "hide" });
                dispatch({ type: "SHOW_TASK_FOR_EDIT", payload: state.task });
                dispatch({ type: "ADD_TASK_TO_LIST", payload: state.task });
                dispatch({ type: "RESET_TASK" });
              }
            }}
            onChange={(e) => {
              dispatch({ type: "NOTE_INPUT", payload: e.target.value });
            }}
          />
        )}
        <div className="buttons--container">
          {state.showCard && (
            <button
              type="button"
              className="button button--secondary outline"
              onClick={() => {
                dispatch({ type: "SHOW_CARD", payload: "hide" });
              }}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
