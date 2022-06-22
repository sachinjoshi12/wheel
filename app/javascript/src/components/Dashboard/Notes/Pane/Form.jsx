import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";
import { Check } from "neetoicons";

import { ASSIGNED_CONTACT_OPTIONS, TAG_OPTIONS } from "./constants";
import { NOTES_FORM_VALIDATION_SCHEMA } from "../constants";

export default function NoteForm({ onClose, note }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    try {
      onClose();
      Toastr.success("Form has been successfully saved.");
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              className="w-full flex-grow-0"
              required
            />
            <Textarea
              label="Description"
              name="description"
              className="w-full flex-grow-0"
              rows={8}
              required
            />
            <Select
            required
            isMulti
            label="Assigned Contact"
            name="assigned_contacts"
            placeholder="Select Role"
            className="w-full flex-grow-0"
            options={ASSIGNED_CONTACT_OPTIONS}
          />
          <Select
            required
            isMulti
            label="Tags"
            name="tags"
            placeholder="Select Role"
            className="w-full flex-grow-0"
            options={TAG_OPTIONS}
          />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label="Save Changes"
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={() => setSubmitted(true)}
              icon={Check}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
