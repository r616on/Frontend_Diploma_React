import React, { Fragment, useState } from "react";
import classNames from "classnames";
// import { Link } from "react-router-dom";
import "./style.scss";

function Pagination({ className }) {
  const [active, setActive] = useState(1);

  const handelClick = (e) => {
    const value = e.target.value;
    console.log(value);
    setActive(value);
  };
  const handelClickBefore = (e) => {
    const value = e.target.value;
    if (active > 1) {
      setActive((prev) => prev - 1);
    }
  };
  const handelClickAfter = (e) => {
    const value = e.target.value;
    if (active < 3) {
      setActive((prev) => prev + 1);
    }
  };
  return (
    <section className={classNames("Pagination", { [className]: className })}>
      <ul className="Pagination__row">
        <li
          onClick={handelClickBefore}
          className="Pagination__item arrow before "
        ></li>
        <li
          onClick={handelClick}
          value={1}
          className={classNames("Pagination__item ", { active: active === 1 })}
        >
          1
        </li>
        <li
          onClick={handelClick}
          value={2}
          className={classNames("Pagination__item ", { active: active === 2 })}
        >
          2
        </li>
        <li
          onClick={handelClick}
          value={3}
          className={classNames("Pagination__item ", { active: active === 3 })}
        >
          3
        </li>
        <li
          onClick={handelClickAfter}
          className="Pagination__item arrow after"
        ></li>
      </ul>
    </section>
  );
}

export default Pagination;
