import React, { Fragment, useState } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <Fragment>
      <div className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setToggled(!toggled)}>
            {toggled ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {toggled ? <p>{info}</p> : ""}
      </div>
    </Fragment>
  );
};

export default Question;
