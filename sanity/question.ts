// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "questions",
  title: "Questions",
  type: "document",

  fields: [
    {
      name: "question_type",
      title: "Question Type",
      type: "string",
    },
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "correct_answer",
      title: "Correct Answer",
      type: "number",
    },
    {
      name: "choices",
      title: "Choices",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "audios",
      title: "Audios",
      type: "file",
      options: {
        storeOriginalFilename: true,
      },
    },
  ],
};
