export default {
  Query: {
    user: () => {},
    users: (_, args, context, info) => [
      {
        id: "awrf23qwrf23fg",
        name: "Brian DLT",
        avatar: "avatar",
      },
      {
        id: "awrf23qwrf23we3",
        name: "Rafael LH",
        avatar: "avatar",
      },
      {
        id: "awrf23qw9903fg",
        name: "Ildelfonso ME",
        avatar: "avatar",
      },
    ],
  },
};
