import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assigned_contacts: [],
  tags: [],
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assigned_contacts: yup
    .array()
    .required("Contact Required")
    .min(1, "Please Select a contact"),
  tags: yup
    .array()
    .required("Tags Required")
    .min(1, "Please Select atleast one Tag"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const NOTES_DATA = [
  {
    id: 1,
    title: "How to Claim the warranty?",
    description:
      "\"Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting. Of course he was getting them, but if he wasn't getting\" ",
    time: "Wdnesday 10.30AM",
    ago: "2 days ago",
    draftedBy: "Oliver Smith",
  },
  {
    id: 2,
    title: "How to Claim the warranty?",
    description:
      "\"Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting. Of course he was getting them, but if he wasn't getting\" ",
    time: "Wdnesday 10.30AM",
    ago: "2 days ago",
    createdBy: "Oliver Smith",
  },
  {
    id: 3,
    title: "How to Claim the warranty?",
    description:
      "\"Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting. Of course he was getting them, but if he wasn't getting\" ",
    time: "Wdnesday 10.30AM",
    ago: "2 days ago",
    createdBy: "Oliver Smith",
  },
  {
    id: 4,
    title: "How to Claim the warranty?",
    description:
      "\"Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting. Of course he was getting them, but if he wasn't getting\" ",
    time: "Wdnesday 10.30AM",
    ago: "2 days ago",
    createdBy: "Oliver Smith",
  },
];
