import Loadable from 'react-loadable'
import Loader from './Loader'

export default (opts) => Loadable({ ...opts, loading: Loader })
