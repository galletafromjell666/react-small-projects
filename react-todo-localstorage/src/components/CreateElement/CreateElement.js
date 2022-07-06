import { useState, useEffect } from "react";
import { closeCreateModal } from "../../features/createModal/createModalSlice.js";
import styles from "./CreateElement.module.css";
import { createElement } from "../../features/toDo/toDoSlice";
import { useDispatch } from "react-redux";

export default function CreateElement() {
  //local state for the form
  const [element, setElement] = useState({});
  //redux dispatch
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    evt.preventDefault();
    setElement({
      ...element,
      [evt.target.name]: evt.target.value,
    });
    console.log(element);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submited = ", element);
    dispatch(createElement(element));
    dispatch(closeCreateModal());
  };

  return (
    <div className={styles.createElementModal}>
      <div className={styles.formBody}>
        <h1>New</h1>
        <form
          onSubmit={(evt) => {
            handleSubmit(evt);
          }}
        >
          <div>
            <h3>Title:</h3>
            <input
              type="text"
              id="titleInput"
              name="titleInput"
              maxLength={14}
              value={element.titleInput || ""}
              onChange={(evt) => {
                handleChange(evt);
              }}
            />
          </div>

          <div>
            <h3>Details:</h3>
            <input
              type="text"
              id="detailInput"
              name="detailInput"
              maxLength={45}
              value={element.detailInput || ""}
              onChange={(evt) => {
                handleChange(evt);
              }}
            />
          </div>
          <div>
            {" "}
            <input className={styles.buttons} type="submit" value="Submit" />
            <button className={styles.buttons}
              onClick={() => {
                dispatch(closeCreateModal());
              }}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
