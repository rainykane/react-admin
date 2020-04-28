import React, { useState, useEffect } from "react";

import { InputElement } from "@/types/element.type";

import CardItem, { TypeItem } from "./CardItem";

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
  const [count, setCount] = useState(0);
  const [allChecked, setAllChecked] = useState(false);
  const [checkedList, setCheckedList]: [CheckedList, Function] = useState(
    list || []
  );

  useEffect(() => {
    const cList = checkedList.filter((item: TypeItem) => item.checked);
    console.log(cList);
    let num: number = 0;
    cList.map((c: TypeItem) => {
      return (num += c.price);
    });
    setCount(num);
  }, [checkedList]);

  const onItemChecked = (index: number, flag: boolean) => {
    const arr = [...checkedList];
    arr[index].checked = flag;
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
      {checkedList.map((item: TypeItem, index: number) => {
        return (
          <CardItem
            id={item.id}
            price={item.price}
            checked={item.checked}
            onItemChecked={(e: boolean) => onItemChecked(index, e)}
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
