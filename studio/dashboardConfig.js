export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602bacfcbbce4200b187f9e2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-nwwzptua',
                  apiId: '7c17af0a-153e-4a74-81f8-f8db0679a55d'
                },
                {
                  buildHookId: '602bacfdb73b6c01612c2a95',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-qx66jhd9',
                  apiId: '27b3b79b-d3a7-4127-9e03-d23e11bfabee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/s1monb/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-qx66jhd9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
