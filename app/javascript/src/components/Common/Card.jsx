import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Dropdown, Avatar, Tooltip } from "neetoui";

const Card = ({ note, deleteHandler }) => (
  <div className="neeto-ui-shadow-s h-[146px] w-full p-4">
    <div className="flex">
      <Typography style="h4">{note.title}</Typography>
      <div className="notes-card-dropdown">
        <Dropdown
          icon={MenuVertical}
          label=""
          position="right"
          buttonStyle="text"
        >
          <li className="m-1">Edit</li>
          <li onClick={() => deleteHandler(note.id)}>Delete</li>
        </Dropdown>
      </div>
    </div>
    <Typography style="body2" className="mb-3 text-gray-500">
      {note?.description}
    </Typography>
    <hr />
    <div className="mt-4 flex">
      <button className="rounded-lg border-2  border-gray-900 bg-gray-50 py-1 px-2 text-xs text-gray-500">
        Getting Started
      </button>
      <div className="ml-auto flex items-center space-x-2">
        <Clock size={12} />
        <Tooltip position="bottom" content={note.time}>
          <Typography style="body3">Created {note.ago}</Typography>
        </Tooltip>
        {note?.createdBy && (
          <Avatar
            onClick={() => {}}
            size="small"
            user={{
              name: note.createdBy,
            }}
          />
        )}
      </div>
    </div>
  </div>
);

export default Card;
