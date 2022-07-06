import { createSlice } from "@reduxjs/toolkit";

const elements = [
  {
    id: 1,
    title: "Play Fortnite",
    details: "Get up to lvl 120 to unlock Darth Vader",
    done: false,
  },
  {
    id: 2,
    title: "Learn Tailwind CSS",
    details: "It seems fun and better than your classes",
    done: false,
  },
];
const initialState = {
  isLoading: true,
  elements,
  nextElementID: 3,
};

const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    convertElementAsDone: (state, action) => {
      console.log(action);
      // it receives the ID of the element to mark as done
      const elementResult = state.elements.find((element) => {
        return element.id === action.payload;
      });
      console.log(elementResult);
      elementResult.done = true;
    },
    createElement: (state, action) => {
      state.elements.push({
        id: state.nextElementID,
        title: action.payload.titleInput,
        details: action.payload.detailInput,
        done: false,
      });
      state.nextElementID += 1;
    },
    removeElement: (state, action) => {
      state.elements = state.elements.filter((element) => {
        return element.id !== action.payload;
      });
    },
  },
});

export default toDoSlice.reducer;
export const { convertElementAsDone, createElement, removeElement } = toDoSlice.actions;
