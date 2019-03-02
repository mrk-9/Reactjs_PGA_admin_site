import ShowcaseCard from '../ShowcaseCard'
import React from 'react'
import Loading from '@pga/pga-component-library/lib/components/LoadingComponent'
import FourOhFour from '../FourOhFour'
import Update from './update'
import { Query } from 'react-apollo'

export const omit = (key, value) => ['__typename', 'id'].includes(key) ? undefined : value

export const sanitize = data => JSON.parse(JSON.stringify(data), omit)

export const getInitialValuesFromData = ({ data, initialValues, transform = {} }) =>
  Object.keys(initialValues).reduce((acc, curr) => {
    if (Object.keys(transform).includes(curr)) {
      acc[curr] = data[transform[curr]] ? data[transform[curr]].id : initialValues[curr]
      return acc
    }
    acc[curr] = data[curr] || initialValues[curr]
    return acc
  }, {})

export const UpdatePage404 = ({ title, dataKey }) => (
  <ShowcaseCard header={title}>
    <h1>{`Error: Record to update Not Found!`}</h1>
    <h3>{`Please select record to update from ${dataKey} landing page`}</h3>
  </ShowcaseCard>
)

export const UpdatePageQuery = ({ query, id, update, initialValues, transform, updateKey, ...props }) => (
  <Query query={query} variables={{ id }}>
    {
      ({loading, error, data = {}}) => {
        if (loading) {
          return <Loading />
        }

        if (error) {
          const message = error.message || 'Error loading data from server'
          return <FourOhFour statusCode={400} title='GraphQl Error' message={message} />
        }

        const values = data[updateKey]
        const initialValue = getInitialValuesFromData({ data: values, initialValues, transform })
        return (
          <Update id={id} data={values} initialValues={initialValue} mutation={update} query={query} {...props} />
        )
      }
    }
  </Query>
)
