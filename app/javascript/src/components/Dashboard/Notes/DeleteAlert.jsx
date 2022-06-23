import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
    onClose();
    Toastr.success("Note deleted succesfully");
  };

  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to delete this note? This cannot be undone."
      title="Delete note"
      isSubmitting={isDeleted}
    />
  );
};

export default DeleteAlert;
