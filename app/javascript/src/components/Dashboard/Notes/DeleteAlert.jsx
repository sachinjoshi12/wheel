import React, { useState } from "react";

import { Alert } from "neetoui";

//import notesApi from "apis/notes";

const DeleteAlert = ({
  onClose,
  setSelectedNoteIds,
  setShowDeleteAlert
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    setDeleting(true);
    setDeleting(false);
    setSelectedNoteIds(null);
    setShowDeleteAlert(false);
  };

  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to delete this note? This cannot be undone."
      title="Delete note"
      isSubmitting={deleting}
    />
  );
};

export default DeleteAlert;
