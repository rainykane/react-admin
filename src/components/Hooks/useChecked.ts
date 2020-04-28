/**
 * 把单选、勾选、反勾选逻辑抽离
 */
import { useReducer } from "react";
import { CheckItemType, ActionType } from "./hook_types";

function reducer(state: CheckItemType[], action: ActionType) {
  const { type, payload } = action;
  const { id, checked } = payload;
  switch (type) {
    case "checked":
      state.forEach((element: CheckItemType) => {
        if (element.id === id) {
          element.checked = checked;
        }
      });
      return [...state];
    case "checkedAll":
      state.forEach((element: CheckItemType) => {
        element.checked = checked;
      });
      return [...state];
    default:
      return state;
  }
}

export const useChecked = (list: CheckItemType[]) => {
  const [newState, dispatch] = useReducer(reducer, list);
  const checkedLength = newState.filter((item: CheckItemType) => !item.checked)
    .length;
  let checkedAll = false;
  if (checkedLength === 0) {
    checkedAll = true;
  } else {
    checkedAll = false;
  }
  return { checkedAll, newState, dispatch };
};
