import { VariantsType } from './routes/product/product.model'

declare global {
  namespace PrismaJson {
    // Define a type for a user's profile information.
    type Variants = VariantsType
  }
}
