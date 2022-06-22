import React from "react";

import { Avatar, Typography } from "neetoui";

const Contact = ({ contact }) => (
  <div className="flex">
    <Avatar
      size="medium"
      user={{
        name: contact.name,
      }}
    />
    <div className="ml-2">
      <Typography style="h5">{contact.name}</Typography>
      <Typography style="body3">{contact.role}</Typography>
    </div>
  </div>
);

export default Contact;
