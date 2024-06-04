import { useState } from "react";
import {
  Col,
  Row,
  Button,
  ConfigProvider,
  Segmented,
  Select,
  Flex,
  DatePicker,
  Typography,
  Popover,
  Switch,
  Radio,
  Space,
  Checkbox,
} from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import {
  DeleteOutlined,
  FilterFilled,
  PlusCircleOutlined,
} from "@ant-design/icons";
import type { RadioChangeEvent } from "antd";
import {
  billedToList,
  preparedByList,
  statusList,
} from "../../../mockData/Invoices/InvoicesData";
import "./index.scss";

const { Title } = Typography;

const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const colors1 = ["#2c4fd1", "#00127f"];
const getHoverColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

export default function FilterBar() {
  const [value, setValue] = useState(0);

  const onChange = (e: RadioChangeEvent) => {
    console.log("Checkbox checked", e.target.value);
    setValue(e.target.value);
  };

  const contractorOptions = billedToList.map((e: string) => ({
    value: e,
    label: e,
  }));

  const optionsVAT = [
    {
      value: "true",
      label: "Yes",
    },
    {
      value: "false",
      label: "No",
    },
  ];

  const optionsStatus = statusList.map((e: string) => ({
    value: e,
    label: e,
  }));

  const optionsMore = (
    <div className="filter-more">
      <Title
        level={5}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>Created</span> <DeleteOutlined />
      </Title>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>All</Radio>
          <Radio value={2}>One day ago</Radio>
          <Radio value={3}>One weak ago</Radio>
          <Radio value={4}>One month ago</Radio>
          <Radio value={5}>One year +</Radio>
        </Space>
      </Radio.Group>

      <Title
        level={5}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <span>VAT</span> <Switch size="small" />
      </Title>

      <div>
        <Title level={5}>Prepared By</Title>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Checkbox value={"All"}>All</Checkbox>
            {preparedByList.map((preparer) => (
              <Checkbox value={preparer}>{preparer}</Checkbox>
            ))}
          </Space>
        </Radio.Group>
      </div>

      <Button
        type="primary"
        style={{ marginTop: "10px", width: "100%", fontWeight: " 700" }}
      >
        Apply Filters
      </Button>
    </div>
  );

  return (
    <>
      <Row justify={"space-between"} align={"middle"} className="invoices-tabs">
        <Col>
          {" "}
          <Segmented
            defaultValue="center"
            options={["All", "Edit", "Inprogress", "Drafts"]}
          />
        </Col>
        <Col>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: `linear-gradient(135deg, ${colors1.join(
                    ", "
                  )})`,
                  colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                    colors1
                  ).join(", ")})`,
                  colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                    colors1
                  ).join(", ")})`,
                  lineWidth: 0,
                },
              },
            }}
          >
            <Button type="primary" size="middle" icon={<PlusCircleOutlined />}>
              Create a new invoice
            </Button>
          </ConfigProvider>
        </Col>
      </Row>
      <Row className="invoices-filter">
        <Flex wrap gap="middle">
          <Select
            showSearch
            placeholder="All contractors"
            optionFilterProp="children"
            filterOption={filterOption}
            options={contractorOptions}
          />{" "}
          <Select
            showSearch
            placeholder="VAT"
            optionFilterProp="children"
            filterOption={filterOption}
            options={optionsVAT}
          />{" "}
          <DatePicker placeholder="From" />
          <DatePicker placeholder="To" />
          <Select
            showSearch
            placeholder="All Status"
            optionFilterProp="children"
            filterOption={filterOption}
            options={optionsStatus}
          />{" "}
          <Popover content={optionsMore} trigger="click">
            <Button>
              More <FilterFilled />
            </Button>
          </Popover>
        </Flex>
      </Row>
    </>
  );
}
