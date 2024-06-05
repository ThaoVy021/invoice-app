import { Pagination, PaginationProps } from "antd";

import "./index.scss";

export default function PageSizeChanger(
  props: Omit<PaginationProps, "showSizeChanger">
) {
  return (
    <Pagination
      {...props}
      showSizeChanger={true}
      className={`show-size-change-only ${props.className}`}
    />
  );
}
