import { SingleCard } from "./single-card";
import { useTask } from "../../contexts/task-context";
import "./displaycard.css";
export function OtherCards({unPinnedRef}){
    const { state  } = useTask();
    let pinnedList = state.taskList.filter(taskItem => taskItem.isPinned);
    // console.log(pinnedList);
    let othersList = state.taskList.filter(taskItem => !taskItem.isPinned);
    // console.log(othersList);
    return (
      <div className="wrapper">
        <section className="card-container displaycontainer" 
          ref={unPinnedRef} >
        {
          state.taskList.filter(taskItem => !taskItem.isPinned)
                        .sort((a,b) => a.sortKey > b.sortKey ? -1 : 1)
                        .map(taskItem => {
                          return <SingleCard taskItem={taskItem} />
                        })
        }
      </section>
    </div>
    )
}

 
