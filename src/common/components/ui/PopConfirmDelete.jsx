// PopConfirmDelete.js
import { Popconfirm } from 'antd';

const PopConfirmDelete = ({ onConfirm, children }) => {
  return (
    <Popconfirm
      title="Are you sure you want to delete the selected product(s)?"
      onConfirm={onConfirm}
      okText="Yes"
      cancelText="No"
    >
      {children}
    </Popconfirm>
  );
};

export default PopConfirmDelete;
