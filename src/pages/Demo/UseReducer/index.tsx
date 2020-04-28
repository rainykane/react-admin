import React, { useState } from "react";

import CardItem, { TypeItem } from "./CardItem";

import { InputElement } from "@/types/element.type";

import "./index.less";

const list: TypeItem[] = [];
for (let q = 0; q < 10; q++) {
  list.push({
    id: q,
    checked: false,
    price: q + Math.floor(Math.random())
  });
}

type CheckedList = TypeItem[];

export default () => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedList, setCheckedList]: [CheckedList, Function] = useState(
    list || []
  );
  console.log(123);

  let count: number = 0;
  checkedList.map((c: TypeItem) => {
    return (count += c.price);
  });

  const onItemChecked = (id: number, flag: boolean) => {
    const arr = [...checkedList];
    arr[id].checked = flag;
    const checkedLength = arr.filter((item: TypeItem) => !item.checked).length;
    if (checkedLength === 0) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }

    setCheckedList(arr);
  };

  const onCheckedAllChange = (flag: boolean): void => {
    const arr = [...checkedList].map((item: TypeItem) => {
      let newItem = { ...item, checked: flag };
      return newItem;
    });
    setAllChecked(flag);
    setCheckedList(arr);
  };

  return (
    <div className="main flex flex-column ali-center">
      {checkedList.map((item: TypeItem) => {
        return (
          <CardItem
            {...item}
            key={item.id}
            onItemChecked={(e: boolean) => onItemChecked(item.id, e)}
          />
        );
      })}
      <p>
        <input
          type="checkbox"
          checked={allChecked}
          onChange={(e: InputElement) => onCheckedAllChange(e.target.checked)}
        />
        全选
      </p>
      <p className="count">总价：￥{count}</p>
    </div>
  );
};
