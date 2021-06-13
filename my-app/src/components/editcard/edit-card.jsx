import { useEffect } from "react";
import { useTask } from "../../contexts/task-context";
import "./editcard.css";
// import { InputCard } from "../inputcard/input-card";
export function EditCard({editingTask}){

    const { state,dispatch } = useTask();
    useEffect(() => {
        dispatch({type : "GET_TASK_FOR_EDIT" , payload : editingTask.id});
    },[])
    return (
        <div className="editcard">
            <input type="text" 
            className="title  outline card--background"
            onChange={(e) => {
                dispatch({type : "EDIT_INPUT_TITLE", payload : e.target.value});
                
            }} 
            value={state.editTask.title}
            />
            <input type="textarea" 
            className="note outline card--background"
            onKeyPress={(e) => {
                if(e.key !== "Enter"){
                    return;
                  }
                  else {
                    dispatch({type : "SET_EDITED_TASKLIST" , payload : state.editTask})
                    dispatch({type : "RESET_EDIT_TASKINPUT" })
                  }
            }}
            onChange={(e) => {
                dispatch({type : "EDIT_INPUT_NOTE" , payload : e.target.value});
            }} 
            value={state.editTask.note}
            />
            {/* <InputCard /> */}
        </div>
    )
}