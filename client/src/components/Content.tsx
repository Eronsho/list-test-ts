import React, { memo, useState } from "react";
import tel from "../assets/images/Call-back-btn.png";
import { States } from "../types";
import "./Content.scss";
import TestsItems from "./TestsItem";
import TestsList from "./TestsList";
type TestsItemProps = {
  data: States[];
  onVisibli: () => void;
};
const Content: React.FC<TestsItemProps> = memo(({ data, onVisibli }) => {
  console.log(data);

  return (
    <div className="content">
      <div className="content__container">
        <TestsList onVisibli={onVisibli} />
        {data.length > 0 ? (
          data.map((date) => <TestsItems key={date.id} human={date} />)
        ) : (
          <>Пусто</>
        )}
      </div>
    </div>
  );
});
export default Content;
