import { useRef, useEffect } from "react";
import './App.css';
import { Header } from "./components/header/header";
import { Sidenav } from "./components/sidenav/sidenav";
import { InputCard } from "./components/inputcard/input-card";
import { PinnedCards } from "./components/displaycard/pinned-cards";
import { OtherCards  } from "./components/displaycard/other-cards";
import { useOnClickOutside } from "./utils/use-click-outside";
import { useTask } from './contexts/task-context';

function App() {
  const { state,dispatch } = useTask();
  const inputRef = useRef(null);
  const focusRef = useRef(null);
  const displayRef = useRef(null);
  const unPinnedRef = useRef(null);
  // console.log({state}, "form 13th line app.js");
  useEffect(() => {
    focusRef.current.focus();
  },[])
  
  useEffect(() => {
    let mockListFromStorage = JSON.parse(localStorage.getItem("mockList"));
    dispatch({type : "SET_TASK_LIST" , payload : mockListFromStorage})
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "mockList",
      JSON.stringify([
        {
          id: "b442d36a-3897-422f-af69-b726ada7299f",
          sortKey : 1623312018947,
          title: "1st LS task",
          note: "localStorage 1st task",
          isEdit: false,
          isPinned : false,
          backgroundColor : "inherit",
          isDeleted : false,
          tagName : "default",
          isArchived : false
        },
        {
          id: "9bd11c4b-bc54-4a22-af72-46e7f0870aa7",
          sortKey : 1623312056363,
          title: "2nd LS task",
          note: "local storage task with uuid",
          isEdit: false,
          isPinned : false,
          backgroundColor : "inherit",
          isDeleted : false,
          tagName : "default",
          isArchived : false
        },
        {
          id : "3",
          sortKey : 1623312122423,
          title: "planning",
          note: "write tasks for today with time",
          isEdit: false,
        isPinned : false,
        backgroundColor : "inherit",
        isDeleted : false,
        tagName : "default",
        isArchived : false
        },
        {
          id : "4",
          sortKey : 1623312143742,
          title: "reading book",
          note: "revise first pages and continue till next page",
          isEdit: false,
        isPinned : false,
        backgroundColor : "inherit",
        isDeleted : false,
        tagName : "default",
        isArchived : false
        },
        {
          id : "5",
          sortKey : 1623312157580, 
          title: "planning",
          note: "write tasks for today with time",
          isEdit: false,
        isPinned : false,
        backgroundColor : "inherit",
        isDeleted : false,
        tagName : "default",
        isArchived : false
        },
        {
          id : "6",
          sortKey : 1623312169034,
          title: "reading book",
          note: "revise first pages and continue till next page",
          isEdit: false,
        isPinned : false,
        backgroundColor : "inherit",
        isDeleted : false,
        tagName : "default",
        isArchived : false
        },
        {
          id : "7",
          sortKey : 1623312180997,
          title: "planning",
          note: "write tasks for today with time",
          isEdit: false,
        isPinned : false,
        backgroundColor : "inherit",
        isDeleted : false,
        tagName : "default",
        isArchived : false
        },
        {
          id : "8",
          sortKey : 1623312194777,
          title: "reading book",
          note: "revise first pages and continue till next page",
          isEdit: false,
        isPinned : false,
        backgroundColor : "inherit",
        isDeleted : false,
        tagName : "default",
        isArchived : false
        },
        {
          id : "9",
          sortKey : 1623312206329,
          title: "planning",
          note: "write tasks for today with time",
          isEdit: false,
        isPinned : false,
        backgroundColor : "inherit",
        isDeleted : false,
        tagName : "default",
        isArchived : false
        },
        {
          id : "10",
          sortKey : 1623312215955,
          title: "reading book",
          note: "revise first pages and continue till next page",
          isEdit: false,
        isPinned : false,
        backgroundColor : "inherit",
        isDeleted : false,
        tagName : "default",
        isArchived : false
        },
        {
          id : "11",
          sortKey : 1623312228713,
          title: "planning",
          note: "write tasks for today with time",
          isEdit: false,
        isPinned : false,
        backgroundColor : "inherit",
        isDeleted : false,
        tagName : "default",
        isArchived : false
        },
        {
          id : "12",
          sortKey : 1623312240211,
          title: "reading book",
          note: "revise first pages and continue till next page",
          isEdit: false,
        isPinned : false,
        backgroundColor : "inherit",
        isDeleted : false,
        tagName : "default",
        isArchived : false
        }
      ])
    );
  }, []);
  let isEditOnWhole = state.taskList
    .map((itemEditable) => {
      // console.log(`${{itemEditable}} : taskItem `);
      return itemEditable.isEdit;
    })
    .reduce((acc, curr) => acc || curr, false) ;
    useOnClickOutside(inputRef, () => {
      dispatch({type : "SHOW_CARD" , payload : "hide"})
    })
    useOnClickOutside(displayRef, () => 
    {
      dispatch({type : "HIDE_TASK_FROM_EDIT" , payload : isEditOnWhole})
    });
  
  let classForApp = isEditOnWhole ? `App blur` : `App`;
  
  return (
    <div className= { classForApp }>
      <div className="header-container">
        <Header />
      </div>
      <div className="container">
        <div className="grid-item-1">
          <Sidenav />
        </div>
        <div className="grid-item-2">
          <InputCard inputRef={inputRef} focusRef={focusRef} />
          <p>Pinned Cards</p>
          <PinnedCards displayRef={displayRef} />
          <p>Other Cards</p>
          <OtherCards unPinnedRef={unPinnedRef} />
        </div>
      </div>
    </div>
  );
}

export default App;
