import { type SchemaTypeDefinition } from 'sanity'
import Product from './schemas/product'
import Categories from './schemas/categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product,Categories],
}
