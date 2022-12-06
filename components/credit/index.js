import { useQuery, gql } from "@apollo/client";
import { Button, Card, Input } from "antd";
import { useContext } from "react";
import CreateCreditContext from "../context/create-credit-context";
import withCreateCreditModal from "../hoc/with-create-credit-modal";
import CreditTable from "./CreditTable";
const { Search } = Input;

function Instalment() {
  const onSearch = (value) => console.log(value);

  const createCreditContext = useContext(CreateCreditContext)

  return (
    <Card className="m-4 h-full">
      <p className="mb-2 text-lg font-semibold">Hợp đồng Tín Chấp</p>
      <div className="flex justify-between mb-4">
        <Button onClick={() => createCreditContext.openModal()} type="primary">Thêm hợp đồng mới</Button>
        <Search
          placeholder="Tìm kiếm tên khách hàng..."
          allowClear
          enterButton="Tìm kiếm"
          size="normal"
          className="w-1/3"
          onSearch={onSearch}
        />
      </div>
      <CreditTable />
    </Card>
  );
}

export default withCreateCreditModal(Instalment)