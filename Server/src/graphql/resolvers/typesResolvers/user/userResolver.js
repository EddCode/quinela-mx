export default {
  Query: {
    user: () => {},
    users: (_, args, context, info) => [
      {
        id: "awrf23qwrf23fg",
        name: "nancy",
        avatar: "avatar",
      },
    ],
  },
};
