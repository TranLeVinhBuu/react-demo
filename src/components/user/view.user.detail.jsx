import { Button, Drawer } from "antd";

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
          <div>
            <img
              height={250}
              width={300}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}
            />
          </div>
          <div>
            <label htmlFor="btnUpload" style={{
                cursor: "pointer",
                color: "white",
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "5px 10px",
                backgroundColor: "lightblue",
                borderRadius: "5px",
            }}>Upload avatar</label>
            <input type="file" hidden id="btnUpload"></input>
          </div>
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
