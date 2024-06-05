import { Button, Col, Divider, Row, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { addInvoice } from "../../../redux/features/invoices/invoiceSlices";

export default function Footer() {
  const newInvoices = useSelector((state: RootState) => state.newInvoice);
  const dispatch = useDispatch();

  const onSave = (isDraft?: boolean) => {
    const { billedTo, invoiceDate, preparedBy } = newInvoices.invoiceInfo;

    if (!billedTo || !invoiceDate || !preparedBy) {
      message.error(
        "Please input required data! (Contractor, Invoice Date, Prepared By"
      );
      return;
    }

    if (newInvoices.selectedItems.length === 0) {
      message.error("Please select at least 1 item before create new invoice!");
      return;
    }

    dispatch(
      addInvoice({
        billedTo: billedTo,
        invoiceDate: invoiceDate,
        status: isDraft ? "Drafts" : "Paid",
        isVAT: newInvoices.vat !== 0,
        preparedBy: preparedBy,
      })
    );

    message.success("Create new invoice is successfully!");
  };

  return (
    <Row justify={"space-between"}>
      <Col>
        <Row gutter={10}>
          <Col>Tax base: {newInvoices.taxBase}</Col>
          <Col>
            <Divider type="vertical" />
          </Col>
          <Col>VAT: {newInvoices.vat}</Col>
          <Col>
            <Divider type="vertical" />
          </Col>
          <Col>Total: {newInvoices.total}</Col>
        </Row>
      </Col>
      <Col>
        <Button type="primary" size="middle" onClick={() => onSave()}>
          Save
        </Button>
        <Button size="middle" onClick={() => onSave(true)}>
          Save as drafts
        </Button>
        <Button type="link" size="middle">
          Cancel
        </Button>
      </Col>
    </Row>
  );
}
