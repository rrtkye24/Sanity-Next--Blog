export default {
    name: "comment",
    type:"documnet",
    title: "Comment",
    fields: [
        {
            name: "name",
            type: "string",

        },
        {title: "Approved",
      name: "approved",
      type: "boolean",
      description: "Comments won't show on the site without approval",  
    },
    {
        name:"email",
        type: "string",

    },
    {
        name:"comment",
        type: "test",
    },
    {
        name: "post",
        type: "preference",
        to: [{type: "post"}],
    }
    ],
}