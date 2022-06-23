import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { NOTES_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";

import { Card, EmptyState, Menubar } from "../../Common";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const notes = [...NOTES_DATA];

  const handleDelete = () => {
    setShowDeleteAlert(true);
  };

  return (
    <>
      <Menubar />
      <Container>
        <Header
          title="Notes"
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add New Note"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
          menuBarToggle
        />
        {notes.length ? (
          notes?.map(note => (
            <Card key={note.id} note={note} deleteHandler={handleDelete} />
          ))
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </>
  );
};

export default Notes;
