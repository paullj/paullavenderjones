export default {
  widgets: [
    {
      name: 'project-info',
    },
    {
      name: 'project-users',
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Production',
            apiId: 'a676f363-f650-480e-b573-8d1e104d2924',
            buildHookId: '601426ed41a0d733272e020c',
          },
          {
            title: 'Preview',
            apiId: 'a676f363-f650-480e-b573-8d1e104d2924',
            buildHookId: '60141d8ab86a750ea242f0af',
            name: 'paullj',
          },
        ],
      },
    },
  ],
};
