import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACTS } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menubar from "./Menubar";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const contacts = [...CONTACTS];

  const deleteHandler = () => {
    setShowDeleteAlert(true);
  };

  return (
    <>
      <Menubar />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button onClick={() => {}} label="Add Contact" icon="ri-add-line" />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
          menuBarToggle
        />
        <Table contacts={contacts} deleteHandler={deleteHandler} />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </>
  );
};

export default Contacts;
