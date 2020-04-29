import React from "react";

export default ({ text }: { text: string }) => {
  console.log("Example B：", "render");
  return <div>Example B 组件：{text}</div>;
};
