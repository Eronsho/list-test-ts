import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import "./TestsItem.scss";
import { States } from "../types";
import del from "../assets/images/del.png";
import { useDispatch } from "react-redux";
import { deleteItemId } from "../store/action-creators/states";
type TestsItemProps = { human: States };
const TestsItems: React.FC<TestsItemProps> = memo(({ human }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const deleteHuman = (id: number) => {
    dispatch(deleteItemId(id));
  };
  return (
    <>
      <div className="item-tests">
        <div
          style={{
            background: human.color.length > 0 ? human.color : "#fff",
          }}
          className="item-tests__color"
        ></div>
        <div className="item-tests__content">{human.id}</div>
        <div className="item-tests__content">{human.firstName}</div>
        <div className="item-tests__content">{human.lastName}</div>
        <div className="item-tests__content">
          {human.country.toLocaleLowerCase() === "russian"
            ? "Россия"
            : human.country}
        </div>
        <div className="item-tests__content">{human.age}</div>
        <div className="item-tests__content">
              {(() => {
            switch (human.language.toLocaleLowerCase()) {
              case "ru":
                return "Русский";

              case "eu":
                return "Английский";
              case "en":
                return "Английский";

              default:
                return human.language;
            }
          })()}
        </div>
        <div
          className="item-tests__content"
          onClick={() => {
            deleteHuman(human.id);
          }}
        >
          {<img src={del} alt="del" />}
        </div>
      </div>
    </>
  );
});

export default TestsItems;
