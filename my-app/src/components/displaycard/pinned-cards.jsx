import { SingleCard } from "./single-card";
import { useTask } from "../../contexts/task-context";
import "./displaycard.css";
export function PinnedCards({displayRef}){
    const { state  } = useTask();
    let pinnedList = state.taskList.filter(taskItem => taskItem.isPinned);
    // console.log(pinnedList);
    let othersList = state.taskList.filter(taskItem => !taskItem.isPinned);
    // console.log(othersList);
    return (
      <div className="wrapper">
        <section className="card-container displaycontainer" 
          ref={displayRef} >
        {
            state.taskList.filter(taskItem => taskItem.isPinned)
                          .sort((a,b) => a.sortKey > b.sortKey ? 1 : -1)
                          .map((taskItem) => {
                              // console.log(taskItem);
                              return <SingleCard taskItem={taskItem} />
                         })
        }
      </section>
    </div>
    )
}

 
