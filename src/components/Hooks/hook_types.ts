export interface CheckItemType {
  id: number;
  price: number;
  checked: boolean;
}

export interface ActionType {
  type: "checked" | "checkedAll";
  payload: {
    id?: number;
    checked: boolean;
  };
}
