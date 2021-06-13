import { v4 as uuid_v4} from "uuid";
export function TaskReducer (state,action)  {
    console.log(action.type);
    switch(action.type) {
        case "SHOW_CARD" : {
            let showCardVar = false;
        if(action.payload === "show"){
            showCardVar  = true;
        }
        // else {
        //     if(action.payload === "hide"){
        //         showCardVar = false;
        //    }
        // }
        return {
            ...state, 
            showCard : showCardVar
        }
        }
        
        case "TITLE_INPUT" : {
            return {
                ...state,
                task : {
                    ...state.task,
                     title : action.payload
                }
            }
        }
        case "NOTE_INPUT" : {
            return {
                ...state,
                task : {
                    ...state.task,
                    note : action.payload
                }
            }
        }
        case "SHOW_TASK_FOR_EDIT" : {
            let currentTaskList = state.taskList.map(task => {
                if(action.payload.id === task.id){
                    return {...task, isEdit : !task.isEdit}
                }
                else {
                    return { ...task, isEdit : false}
                }
            })
            return {
                ...state,
                taskList : currentTaskList
            }
        }
        case "ADD_TASK_TO_LIST" : {
            let taskToBeAdded = { ...action.payload , id : uuid_v4(), isEdit : false , sortKey : Date.now()};
            console.log(taskToBeAdded,"from ADD_TASK_TO_LIST" );
            return {
                  ...state,
                  taskList :  [ taskToBeAdded , ...state.taskList ]
            }
        }
        case "RESET_TASK" : {
            return {
                ...state,
                task : {...state.task, title : ``, note : ``, isEdit : false , id : ``, sortKey : 0}
            }
        }
        case "HIDE_TASK_FROM_EDIT" : {
            let isEditOnWhole = action.payload;
            let newList = state.taskList.map(itemOnEdit => {
                return isEditOnWhole ? { ...itemOnEdit , isEdit : false} : itemOnEdit ;
            })
            return {
                ...state,
                taskList : newList
            }
        }
        case "SET_TASK_LIST" : {
            let locallyStoredTaskList = action.payload;
            return {
                ...state ,
                taskList : [...state.taskList, ...locallyStoredTaskList]
            }
        }
        case "GET_TASK_FOR_EDIT" : {
            let editableTask = state.taskList.find(taskItem => taskItem.id === action.payload);
            return {
                ...state,
                editTask : {...state.editTask , id : editableTask.id , title : editableTask.title, note : editableTask.note, isEdit : true, sortKey : editableTask.sortKey}
            }
        }
        case "EDIT_INPUT_TITLE" : {
            return {
                ...state,
                editTask : {
                    ...state.editTask,
                    title : action.payload
                }
            }
        }
        case "EDIT_INPUT_NOTE" : {
            return {
                ...state,
                editTask : {
                    ...state.editTask,
                    note : action.payload
                }
            }
        }
        case "SET_EDITED_TASKLIST" : {
            let taskEdited = {...action.payload , isEdit : false};
            let filteredTaskList = state.taskList.filter(taskItem => taskItem.id !== taskEdited.id);
            let sortedTaskList = filteredTaskList.sort((a,b) => a.sortKey > b.sortKey ? -1 : 1);
            return {
                ...state,
                taskList : [taskEdited , ...sortedTaskList]
            }
        }
        case "RESET_EDIT_TASKINPUT" : {
            return {
                ...state,
                editTask : {
                    ...state.editTask, id : ``,title : ``,note : ``, isEdit : true 
                }
            }
        }
        case "PIN_TASK" : {
            let taskToBePinned = {...action.payload , isPinned : !action.payload.isPinned};
            let filterPinnedList = state.taskList.filter(taskItem => taskItem.id !== taskToBePinned.id);
            let sortedPinnedList = filterPinnedList.sort((a,b) => a.sortKey > b.sortKey ? -1 : 1);
            return {
                ...state,
                taskList : [taskToBePinned,...sortedPinnedList]
            }
        }
        default : console.log("error case")
    }
    return(
        <div>From taskreducer </div>
    )
}

