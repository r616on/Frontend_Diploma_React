import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";
import { Pagination } from "antd";
import "./style.scss";
import { useDispatch } from "react-redux";
import { actionsFilterRoutes } from "../../organisms/Routes/FilterRoutes/effects/slice";
interface IpaginationCustom {
  className?: any;
  total?: number;
  pageSize: number;
}
const PaginationCustom: FC<IpaginationCustom> = ({
  className,
  total,
  pageSize,
}) => {
  const dispatch = useDispatch();
  const [activPage, setActivPage] = useState(1);
  useEffect(() => {
    dispatch(actionsFilterRoutes.setOffset(+(activPage - 1) * pageSize));
  }, [activPage, pageSize, dispatch]);
  return (
    <section className={classNames("Pagination", { [className]: className })}>
      <Pagination
        defaultCurrent={1}
        current={activPage}
        total={total}
        defaultPageSize={5}
        pageSize={pageSize}
        onChange={(page) => setActivPage(page)}
      />
    </section>
  );
};

export default React.memo(PaginationCustom);

// function Pagination({ className }) {
//   const [active, setActive] = useState(1);

//   const handelClick = (e) => {
//     const value = e.target.value;
//     setActive(value);
//   };
//   const handelClickBefore = (e) => {
//     if (active > 1) {
//       setActive((prev) => prev - 1);
//     }
//   };
//   const handelClickAfter = (e) => {
//     if (active < 3) {
//       setActive((prev) => prev + 1);
//     }
//   };
//   return (
//     <section className={classNames("Pagination", { [className]: className })}>
//       <ul className="Pagination__row">
//         <li
//           onClick={handelClickBefore}
//           className="Pagination__item arrow before "
//         ></li>
//         <li
//           onClick={handelClick}
//           value={1}
//           className={classNames("Pagination__item ", { active: active === 1 })}
//         >
//           1
//         </li>
//         <li
//           onClick={handelClick}
//           value={2}
//           className={classNames("Pagination__item ", { active: active === 2 })}
//         >
//           2
//         </li>
//         <li
//           onClick={handelClick}
//           value={3}
//           className={classNames("Pagination__item ", { active: active === 3 })}
//         >
//           3
//         </li>
//         <li
//           onClick={handelClickAfter}
//           className="Pagination__item arrow after"
//         ></li>
//       </ul>
//     </section>
//   );
// }
