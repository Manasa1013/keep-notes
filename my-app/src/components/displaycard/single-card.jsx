import { EditCard } from "../editcard/edit-card";
import { useTask } from "../../contexts/task-context";
import "./displaycard.css";

function SingleCard({taskItem}){
    const { state , dispatch } = useTask();
    return (
        <div>
              <button type="button"
                className="button button--secondary outline display--button"
                onClick={() => {
                  dispatch({type : "PIN_TASK",payload : taskItem})
                }}>
                <span className="align-right" >
                    <i
                     class= {taskItem.isPinned ? "fas fa-thumbtack fa-lg" : "fas fa-thumbtack" } style={{ color : (taskItem.isPinned ?  "#24292e"  : "inherit")}}></i>
                  </span>
                  </button>
              <div
                className="card displaycard"
                key={taskItem.id}
                style={{ visibility: "visible" }}
                onClick={() => {
                    dispatch({type : "SHOW_TASK_FOR_EDIT" , payload : taskItem});
                }
            }
              >
                <p className="title display-title">
                  {taskItem.title}
                </p> 
                <p className="note display-note">
                  {taskItem.note}
                </p> 
                <div className="buttons--container">
                  <button type="button"
                  className="button button--secondary outline"
                  onClick={() => {
                    dispatch({type : "DELETE_NOTE" , payload : taskItem })
                  }}>Delete</button>
                  <button
                    type="button"
                    className="button button--secondary outline display--button"
                  >
                    {taskItem.isEdit ? "Close" : "Edit"}
                  </button>
                </div>
                
              </div>
              {taskItem.isEdit && (
                <EditCard
                  editingTask={taskItem}
                />
              )}
            </div>

    )
}
export { SingleCard };