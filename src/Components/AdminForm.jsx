import "./AdminForm.css";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import Quiz from "./Quiz";

const AdminForm = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div className="adminForm">
      <>
        <Button type="primary" onClick={showModal}>
          Start Quiz
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOk}
            >
              Submit
            </Button>,
          ]}
        >
          <Quiz />
        </Modal>
      </>
    </div>
  );
};

export default AdminForm;
