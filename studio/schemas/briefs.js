
export default {
  name: 'briefs',
  title: 'Briefs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
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
      name: 'avatar',
      title: 'Avatar',
      type: 'image'
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
        name: 'buttontext',
        title: 'Button Text',
        type: 'text',
      },
      {
        name: 'packnum',
        title: 'Pack Number',
        type: 'text',
      },
      {
        name: 'buttoncolour',
        title: 'Button Colour',
        type: 'text',
      },
    {
      title: 'overview', 
      name: 'Overview',
      type: 'PortableText', 
    },
    {
      title: 'background', 
      name: 'Client_Background',
      type: 'PortableText', 
    },
    {
      title: 'audience', 
      name: 'Audience',
      type: 'PortableText', 
    },
    {
      title: 'lookandfeel', 
      name: 'Look_and_Feel',
      type: 'PortableText', 
    },
  ],
}
