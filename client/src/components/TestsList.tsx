import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SortItemSuccess } from "../store/action-creators/states";
import "./TestsList.scss";
type TestsListProps = { onVisibli: () => void };
const TestsList: React.FC<TestsListProps> = memo(({ onVisibli }) => {
  const dispatch = useDispatch();
  return (
    <div className="content__table table">
      <div className="table__item">
        <div className="table__content " onClick={() => onVisibli()}>
          +
        </div>
        <div
          className="table__container"
          onClick={() => {
            dispatch(SortItemSuccess());
          }}
        >
          <div className="table__content">ID</div>
          <div className="table__content">firstName</div>
          <div className="table__content">lastName</div>
          <div className="table__content">country</div>
          <div className="table__content">age</div>
          <div className="table__content">language</div>
        </div>
      </div>
    </div>
  );
});
export default TestsList;
