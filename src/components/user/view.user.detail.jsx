import { Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDataDetailOpen, setIsDataDetailOpen } =
    props;

  return (
    <Drawer
      title="Chi tiết User"
      onClose={() => {
        setDataDetail(null);
        setIsDataDetailOpen(false);
      }}
      open={isDataDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>Id: {dataDetail.id}</p>
          <br />
          <p>Full name: {dataDetail.fullName}</p>
          <br />
          <p>Email: {dataDetail.email}</p>
          <br />
          <p>Phone number: {dataDetail.phone}</p>
        </>
      ) : (
        <>
          <p>Không có dữ liệu</p>
        </>
      )}
    </Drawer>
  );
};
export default ViewUserDetail;
