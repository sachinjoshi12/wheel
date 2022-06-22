// @ts-nocheck
import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Item from "components/Common/Item";
import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";
import EditNotePane from "./Pane/Edit";

import { NOTES_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setNotes([...NOTES_DATA]);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  const handleDelete = id => {
    setShowDeleteAlert(true);
    setSelectedNoteIds(id);
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
          notes?.map(note => <Item key={note.id} note={note} deleteHandler={handleDelete}/>)
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
        <EditNotePane
        showPane={showEditNote}
        setShowPane={setShowEditNote}
        note={selectedNote}
      />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteIds={selectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
            setSelectedNoteIds={setSelectedNoteIds}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
