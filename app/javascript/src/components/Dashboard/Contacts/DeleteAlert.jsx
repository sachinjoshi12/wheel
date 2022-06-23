import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
    onClose();
    Toastr.success("Contact deleted succesfully");
  };

  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to continue? This cannot be undone."
      title="Delete Contact"
      isSubmitting={isDeleted}
    />
  );
};

export default DeleteAlert;
