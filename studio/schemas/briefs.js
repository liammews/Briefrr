
export default {
  name: 'briefs',
  title: 'Briefs',
  type: 'document',
  fields: [
    {
        name: 'publishedAt',
        title: 'Published at',
        description: 'You can use this field to schedule projects where you show them',
        type: 'datetime'
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'string'
    },
    {
        name: 'from',
        title: 'From',
        type: 'string'
    },
    {
        name: 'catagory',
        title: 'Catagory',
        type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
        name: 'link',
        title: 'Link',
        type: 'text',
      },
    {
      title: 'Body', 
      name: 'body',
      type: 'PortableText', 
    }
  ],
}
