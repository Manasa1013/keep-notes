import { EditCard } from "../editcard/edit-card";
import { SingleCard } from "./single-card";
import { useTask } from "../../contexts/task-context";
import "./displaycard.css";
export function DisplayCard({displayRef}){
    const { state , dispatch } = useTask();
    let pinnedList = state.taskList.filter(taskItem => taskItem.isPinned);
    console.log(pinnedList);
    let othersList = state.taskList.filter(taskItem => !taskItem.isPinned);
    console.log(othersList);
    return (
      <div className="wrapper">
        <section className="card-container displaycontainer" 
          ref={displayRef} >
            <p>Pinned Cards</p>
        {
            state.taskList.filter(taskItem => taskItem.isPinned)
                          .sort((a,b) => a.sortKey > b.sortKey ? -1 : 1)
                          .map((taskItem) => {
                              console.log(taskItem);
                              return <SingleCard taskItem={taskItem} />
                         })
        }
            <p>Other Cards</p>
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

 
