import { Button, Col, Divider, Row, Typography, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { addInvoice } from "../../../redux/features/invoices/invoiceSlices";
import emailjs from "@emailjs/browser";

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

    emailjs
      .send(
        "service_i7fnmgk",
        "template_gc2h58b",
        {
          sendTo: "thaovyluuthanh@gmail.com",
          sender: "Thao Vy",
          billedTo: billedTo,
          invoiceDate: invoiceDate,
          status: isDraft ? "Drafts" : "Paid",
          VAT: newInvoices.vat,
          preparedBy: preparedBy,
        },
        "g3ukIcsb_jLDAbXD1"
      )
      .then((response) => {
        message.success("Send email is successful!");
        console.log("send mail response", response);
      })
      .catch((error) => {
        message.error("Send email is failed!");
        console.log("send mail error", error);
      });
  };

  return (
    <Row justify={"space-between"} align={"middle"}>
      <Col>
        <Row gutter={10}>
          <Col>
            <Typography.Text>
              Tax base: {newInvoices.taxBase} BRN
            </Typography.Text>
          </Col>
          <Col>
            <Divider type="vertical" />
          </Col>
          <Col>
            <Typography.Text>VAT: {newInvoices.vat} BRN</Typography.Text>
          </Col>
          <Col>
            <Divider type="vertical" />
          </Col>
          <Col>
            <Typography.Text>Total: {newInvoices.total} BRN</Typography.Text>
          </Col>
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
