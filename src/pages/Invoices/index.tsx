import ContentLayout from "../../layouts/Content";
import FilterBar from "../../components/Invoices/FilterBar";
import Content from "../../components/Invoices/Content";
import PaginationBar from "../../components/Invoices/PaginationBar";
// import { mockInvoicesData } from "../../mockData/Invoices/InvoicesData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { getData } from "../../redux/features/invoices/invoiceSlices";

export default function Invoices() {
  const invoices = useSelector((state: RootState) => state.invoices.data);
  const dispatch = useDispatch();

  // const [dataSource, setDataSource] = useState(mockInvoicesData);

  const paginationOnChange = (current: number, pageSize: number) => {
    dispatch(getData({ current, pageSize }));
  };

  return (
    <>
      <ContentLayout
        searchBar={<FilterBar />}
        tableView={<Content dataSource={invoices} />}
        actionBar={<PaginationBar onChange={paginationOnChange} />}
      />
    </>
  );
}
