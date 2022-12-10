import { Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { DELETE_INSTALMENT, GET_INSTALMENTS } from "./query";
import { handleResponse } from "../../helpers/common";

export function DeleteInstalmentConfirm({ id }) {
  const [removeInstalment] = useMutation(DELETE_INSTALMENT, handleResponse({ successMsg: "Xóa hợp đồng thành công"}));

  const onConfirm = () => {
    if (!id) return;
    removeInstalment({
      variables: {
        removeInstallmentContractId: id,
      },
      refetchQueries: [
        {
          query: GET_INSTALMENTS,
        },
      ],
    });
  };

  return (
    <Popconfirm
      title="Xóa hợp đồng？"
      okText="Ok"
      cancelText="Đóng"
      placement="topLeft"
      onConfirm={onConfirm}
    >
      <DeleteOutlined
        title="Xóa"
        style={{ fontSize: "18px" }}
        className="text-red-500"
      />
    </Popconfirm>
  );
}
