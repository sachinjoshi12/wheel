import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACT_VALIDATION_SCHEMA, ROLE_OPTIONS } from "./constants";

const ContactForm = ({ onClose, contact }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    try {
      onClose();
      Toastr.success("contact has been successfully saved.");
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={contact}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full justify-between">
              <Input
                required
                label="First Name"
                name="firstName"
                className="mr-6"
              />
              <Input required label="Last Name" name="lastName" />
            </div>
            <Input
              required
              label="Email"
              name="email"
              className="w-full flex-grow-0"
            />
            <Select
              required
              label="Role"
              name="role"
              options={ROLE_OPTIONS}
              placeholder="Select Role"
              className="w-full"
            />
          </Pane.Body>
          <Pane.Footer className="border-t">
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
};

export default ContactForm;
