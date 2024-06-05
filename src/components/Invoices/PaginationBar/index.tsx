import { Pagination } from "antd";
import "./index.scss";

export default function PaginationBar({ onChange }: any) {
  return (
    <div>
      <Pagination
        total={85}
        defaultPageSize={20}
        defaultCurrent={1}
        itemRender={(page, type, originalElement) => {
          return <>{originalElement}</>;
        }}
        onChange={onChange}
      />
    </div>
  );
}
