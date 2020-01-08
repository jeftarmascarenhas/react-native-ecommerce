import uuid from 'uuid/v4'

import images from '../utils/images'

export const products = [
  {
    id: uuid(),
    name: 'Termogênico 60 comprimidos',
    image: images.productImg01,
    thumbimage: images.productThumbImg01,
    price: 35.99,
  },
  {
    id: uuid(),
    name: 'Blend Vegan - Growth supplements',
    image: images.productImg02,
    thumbimage: images.productThumbImg02,
    price: 102.36,
    details: {
      description: '',
    },
  },
  {
    id: uuid(),
    name: 'Termogênico 60 comprimidos',
    image: images.productImg01,
    thumbimage: images.productThumbImg01,
    price: 159.25,
  },
  {
    id: uuid(),
    name: 'Blend Vegan - Growth supplements',
    image: images.productImg02,
    thumbimage: images.productThumbImg02,
    price: 65.0,
  },
  {
    id: uuid(),
    name: 'Termogênico 60 comprimidos',
    image: images.productImg01,
    thumbimage: images.productImg01,
    price: 42.33,
  },
  {
    id: uuid(),
    name: 'Blend Vegan - Growth supplements',
    image: images.productImg02,
    thumbimage: images.productImg02,
    price: 17.89,
  },
]
