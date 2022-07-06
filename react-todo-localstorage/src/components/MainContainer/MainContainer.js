import styles from "./MainContainer.module.css";
import { openCreateModal } from "../../features/createModal/createModalSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from "../Card/Card";
// icons
import { MdNoteAdd } from "react-icons/md";
export default function MainContainer() {
  const dispatch = useDispatch();
  const arrElements = useSelector((state) => {
    return state.toDo.elements;
  });
  useEffect(() => {
    console.log(arrElements);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(styles);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <h1 className={styles.mainText}>To Do App with Redux </h1>
      </div>
      {!arrElements.length < 1 && (
        <div className={styles.newButtonContainer}>
          <button
            onClick={() => {
              dispatch(openCreateModal());
            }}
          >
            <MdNoteAdd className={styles.newIcon} />
          </button>
        </div>
      )}

      {arrElements.length < 1 && (
        <div className={styles.emptyMessageContainer}>
          <div className={styles.emptyMessageContainerText}>
            {" "}
            <h1>This looks lonely, try to add something </h1>
          </div>

          <div className={styles.emptyMessageContainerButton}>
            <button
              onClick={() => {
                dispatch(openCreateModal());
              }}
            >
              <MdNoteAdd className={styles.newIcon} />
            </button>
          </div>
        </div>
      )}
      <div className={styles.cardContainer}>
        {arrElements.map((element) => {
          return <Card key={element.id} {...element} />;
        })}
      </div>
    </div>
  );
}
