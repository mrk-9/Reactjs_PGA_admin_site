import React from 'react'
import Loading from '@pga/pga-component-library/lib/components/LoadingComponent'
import Error from './Error'

export default ({ error, retry, pastDelay }) => {
  if (error) {
    return <Error retry={retry} />
  } else if (pastDelay) {
    return <Loading />
  } else {
    return null
  }
}
