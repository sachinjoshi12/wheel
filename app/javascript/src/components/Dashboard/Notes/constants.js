import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
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
      "\"Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting. Of course he was getting them, but if he wasn't getting",
    time: "Wdnesday 10.30AM",
    ago: "2 days ago",
    draftedBy: "Oliver Smith",
  },
  { id: 2,
    title: "How to Claim the warranty?",
    description:
      "\"Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting. Of course he was getting them, but if he wasn't getting",
    time: "Wdnesday 10.30AM",
    ago: "2 days ago",
    createdBy: "Sachin Joshi",
  },
  { id: 3,
    title: "How to Claim the warranty?",
    description:
      "\"Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting. Of course he was getting them, but if he wasn't getting",
    time: "Wdnesday 10.30AM",
    ago: "2 days ago",
    createdBy: "Sachin Joshi",
  },
  { id: 4,
    title: "How to Claim the warranty?",
    description:
      "\"Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting. Of course he was getting them, but if he wasn't getting",
    time: "Wdnesday 10.30AM",
    ago: "2 days ago",
    createdBy: "Sachin Joshi",
  },
];
