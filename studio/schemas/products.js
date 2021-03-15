export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
        name: 'image',
        title: 'Image',
        type: 'image'
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'itemid',
      title: 'Item ID',
      type: 'string'
    },
    {
      name: 'guid',
      title: 'GUID',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string'
    },
    {
      name: 'catagory',
      title: 'Catagory',
      type: 'string'
    },
    {
        name: 'description',
        title: 'Decription',
        type: 'string',
        options: {
          maxLength: 124
        }
      },
      {
        name: 'overview',
        title: 'Overview',
        type: 'PortableText',
      },
      {
        name: 'fulldescription',
        title: 'Full Decription',
        type: 'PortableText',
      },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'name',
        maxLength: 96
    }
    },
    {
      name: 'link',
      title: 'link',
      type: 'string'
    },
  ],
}
