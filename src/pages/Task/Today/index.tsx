import React, { FC } from "react";
import { ConnectProps, Loading, connect, useDispatch } from "umi";
import { PageHeaderWrapper } from "@ant-design/pro-layout";

import { Button } from "antd";

import { TodayTaskState } from "./model";

interface PageProps extends ConnectProps {
  todayTask: TodayTaskState;
  loading: boolean;
}

const TodayTaskPage: FC<PageProps> = ({ todayTask }) => {
  const { name } = todayTask;
  const dispatch = useDispatch();

  const onClick = (num: number) => {
    dispatch({
      type: "todayTask/query",
      payload:
        num === 1 ? { name: "哈哈，我改变了useModel" } : { name: "useModel" }
    });
  };
  return (
    <PageHeaderWrapper>
      <div className="flex model">
        Hello {name}
        <br />
        <Button type="primary" onClick={() => onClick(1)}>
          dispatch
        </Button>
        <Button type="primary" onClick={() => onClick(2)}>
          重置
        </Button>
      </div>
    </PageHeaderWrapper>
  );
};

export default connect(
  ({
    todayTask,
    loading
  }: {
    todayTask: TodayTaskState;
    loading: Loading;
  }) => ({
    todayTask,
    loading: loading.models.todayTask
  })
)(TodayTaskPage);
