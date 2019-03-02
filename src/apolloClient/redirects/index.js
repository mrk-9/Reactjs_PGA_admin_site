import invoice from './invoice'
import product from './product'
import event from './event'
import section from './section'
import paymentTypes from './paymentType'

export default {
  ...invoice,
  ...product,
  ...event,
  ...section,
  ...paymentTypes
}
