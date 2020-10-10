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
                  buildHookId: '5f811b2a2c8e2f73b21c05e1',
                  title: 'Sanity Studio',
                  name: 'operand-io-studio',
                  apiId: '724f3f4c-60d0-4b1b-b337-1b348bc6ed93'
                },
                {
                  buildHookId: '5f811b2a42c40b9253fa246f',
                  title: 'Landing pages Website',
                  name: 'operand-io',
                  apiId: '9cca80c8-13e8-4361-b464-fcda0a2227cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrlynn/operand.io',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://operand-io.netlify.app', category: 'apps'}
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
