import { Row, Select, Flex, Form, Col, Input, DatePicker } from "antd";
import {
  billedToList,
  preparedByList,
} from "../../../mockData/Invoices/InvoicesData";
import "./index.scss";
import { useDispatch } from "react-redux";
import { setInvoiceInfo } from "../../../redux/features/invoices/createNew/createNewSlice";
import moment from "moment";

const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

export default function FilterBar() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const contractorOptions = billedToList.map((e: string) => ({
    value: e,
    label: e,
  }));

  const preparedOptions = preparedByList.map((e: string) => ({
    value: e,
    label: e,
  }));

  return (
    <Form
      form={form}
      onFinish={(values: any) => {
        dispatch(
          setInvoiceInfo({
            ...values,
            invoiceDate: values.invoiceDate
              ? moment(values.invoiceDate).format("YYYY-MM-DD")
              : values.invoiceDate,
            dueDate: values.dueDate
              ? moment(values.dueDate).format("YYYY-MM-DD")
              : values.dueDate,
          })
        );
      }}
      onFieldsChange={() => {
        form?.submit();
      }}
    >
      <Row className="create-new-filter">
        <Col>
          <Flex wrap gap="middle">
            <Form.Item name={"id"}>
              <Input placeholder="Document Number" />
            </Form.Item>
            <Form.Item name={"documentType"}>
              <Select
                showSearch
                placeholder="Document Type"
                optionFilterProp="children"
                filterOption={filterOption}
                options={[
                  {
                    value: "Document Type A",
                    label: "Document Type A",
                  },
                  {
                    value: "Document Type B",
                    label: "Document Type B",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item name={"preparedBy"}>
              <Select
                showSearch
                placeholder="Prepared"
                optionFilterProp="children"
                filterOption={filterOption}
                options={preparedOptions}
              />
            </Form.Item>
          </Flex>
          <Flex wrap gap="middle">
            <Form.Item name={"billedTo"}>
              <Select
                showSearch
                placeholder="Contractor"
                optionFilterProp="children"
                filterOption={filterOption}
                options={contractorOptions}
              />
            </Form.Item>
            <Form.Item name={"format"}>
              <Select
                showSearch
                placeholder="Format"
                optionFilterProp="children"
                filterOption={filterOption}
                options={[
                  {
                    value: "Format A",
                    label: "Format A",
                  },
                  {
                    value: "Format B",
                    label: "Format B",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item name={"bankAccount"}>
              <Select
                showSearch
                placeholder="Bank Account"
                optionFilterProp="children"
                filterOption={filterOption}
                options={[
                  {
                    value: "Account A",
                    label: "Account A",
                  },
                  {
                    value: "Account B",
                    label: "Account B",
                  },
                ]}
              />
            </Form.Item>
          </Flex>
          <Flex wrap gap="middle">
            <Form.Item name={"invoiceDate"}>
              <DatePicker placeholder="Invoice Date" />
            </Form.Item>
            <Form.Item name={"dueDate"}>
              <DatePicker placeholder="Due Date" />
            </Form.Item>
            <Form.Item name={"payment"}>
              <Select
                showSearch
                placeholder="Payment"
                optionFilterProp="children"
                filterOption={filterOption}
                options={[
                  {
                    value: "Cash",
                    label: "Cash",
                  },
                  {
                    value: "Bank",
                    label: "Bank",
                  },
                ]}
              />
            </Form.Item>
          </Flex>
        </Col>
      </Row>
    </Form>
  );
}
