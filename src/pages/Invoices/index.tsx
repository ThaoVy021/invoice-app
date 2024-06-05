import ContentLayout from "../../layouts/Content";
import InvoicesFilterBar from "../../components/Invoices/FilterBar";
import InvoicesTable from "../../components/Invoices/InvoicesTable";
import InvoicesPaginationBar from "../../components/Invoices/PaginationBar";

export default function Invoices() {
  return (
    <>
      <ContentLayout
        searchBar={<InvoicesFilterBar />}
        tableView={<InvoicesTable />}
        actionBar={<InvoicesPaginationBar />}
      />
    </>
  );
}
