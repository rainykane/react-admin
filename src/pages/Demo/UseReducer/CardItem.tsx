import React, { memo } from "react";

import { InputElement } from "@/types/element.type";

export interface TypeItem {
  id: number;
  price: number;
  checked: boolean;
}

export interface TypeItemChange extends TypeItem {
  onItemChecked: (e: boolean) => void;
}

// memo优化策略
function areEqual(prevProps: TypeItem, nextProps: TypeItem) {
  return prevProps.checked === nextProps.checked;
}
const CardItem = memo(
  ({ id, price, checked, onItemChecked }: TypeItemChange) => {
    return (
      <div className="item flex jus-between" style={{ width: "150px" }}>
        <input
          id={`${id}`}
          checked={checked}
          type="checkbox"
          onChange={(e: InputElement) => {
            onItemChecked(e.target.checked);
          }}
        />
        <span className="price">￥{price}</span>
      </div>
    );
  },
  areEqual
);

export default CardItem;
