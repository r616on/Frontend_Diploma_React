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
