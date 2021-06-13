import { createContext, useContext, useReducer } from "react";
import { TaskReducer } from "../reducers/task-reducer";

export const useTask = () => {
    return useContext(TaskContext);
};
export const TaskContext = createContext();

export function TaskProvider({ children }){
    const randomTask  =
    {
        id: "9bd11c4b-bc54-4a22-af72-46e7f0870aa7",
        sortKey : 1623310974407,
        title: "planning",
        note: "write tasks for today with time",
        isEdit: true,
        isPinned : false,
        backgroundColor : "inherit",
        isDeleted : false,
        tagName : "default",
        isArchived : false
      }   
 const [state,dispatch] = useReducer(TaskReducer,{
     showCard : false,
     task : {
         id : ``,
         sortKey : 0,
         title : ``,
         note : ``,
         isEdit : true,
         isPinned : true,
         backgroundColor : "inherit",
         isDeleted : false,
         tagName : "default",
         isArchived : false
     },
     taskList : [],
     editTask : {
         id : ``,
         sortKey : 0,
         title : ``,
         note : ``,
         isEdit : true,
         isPinned : false,
         backgroundColor : "inherit",
         isDeleted : false,
         tagName : "default",
         isArchived : false
     }
 });

 
 return (
     <TaskContext.Provider value={{ state,dispatch }}>
         {children}
     </TaskContext.Provider>
 )
}