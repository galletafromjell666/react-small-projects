import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import { removeElement } from "../../features/toDo/toDoSlice";
// icons
import { MdRemoveCircle } from "react-icons/md";
export default function Card({ title, details, id }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.cardMain}>
      <div className={styles.cardHeader}>
        <h2>{title}</h2>
      </div>
      <div className={styles.cardContent}>
        <p>{details}</p>
      </div>
      <div className={styles.removeContainer}>
        <button 
          onClick={() => {
            dispatch(removeElement(id));
          }}
        >
          <MdRemoveCircle className={styles.removeIcon} />
        </button>
      </div>
    </div>
  );
}
