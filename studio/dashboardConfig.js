export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '636aa82c5cd452005dec1126',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-r6vqndxi',
                  apiId: 'b6748878-6895-436f-a8dd-58f1de31b944'
                },
                {
                  buildHookId: '636aa82d0dcabd007ed3b6a0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-by2qw47f',
                  apiId: '80a1c195-b660-415a-8fe9-606b1208d28f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jbberma/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-by2qw47f.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
