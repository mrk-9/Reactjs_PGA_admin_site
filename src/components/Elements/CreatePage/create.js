import React, { Fragment } from 'react'
import { Mutation, withApollo } from 'react-apollo'
import { Formik } from 'formik'
import Toast, { notifyWithUpdate, updateNotify, updateErrorNotify } from '../Toast'
import { Form } from '../Forms'
import { Errors, getToast, updateToast } from '../Toast/helpers'

export const validate = (fields) => (values) => {
  return fields.reduce((acc, curr) => {
    if (!values[curr]) {
      acc[curr] = `${curr} is Required`
    }
    return acc
  }, {})
}

export const handleSubmit = ({ history, dataKey, createKey, create, client }) => async (values, actions) => {
  actions.setSubmitting(true)
  const { data: { toast } } = await client.query({ query: getToast })

  try {
    const { data } = await create({
      variables: { input: values }
    })
    const { name } = data[createKey]
    updateNotify(toast.id, {type: 'SUCCESS',
      message: `${name} successfully created!`,
      close: () => {
        history.push(`/${dataKey}`)
      }})
    actions.setSubmitting(false)
  } catch (error) {
    actions.setSubmitting(false)
    updateErrorNotify(toast.id, Errors({ dataKey, error }))
  }
}

export default withApollo(({
  initialValues, required, mutation, history, createKey, dataKey, refetch, client, ...props
}) => (
  <Fragment>
    <Mutation mutation={mutation} refetchQueries={[{ query: refetch }]}>
      {(create, { loading, error }) => {
        if (loading) {
          const id = notifyWithUpdate({ message: 'Creating in progress...' })
          client.mutate({ mutation: updateToast, variables: { id } })
        }

        if (error) {
          client.query({ query: getToast }).then(({ data: { toast } }) => {
            updateErrorNotify(toast.id, Errors({ dataKey, error }))
          })
        }

        return (
          <Formik
            initialValues={initialValues}
            validate={validate(required)}
            onSubmit={handleSubmit({ history, dataKey, createKey, create, client })}
            render={(formProps) => (<Form {...formProps} {...props} />)}
          />
        )
      }}
    </Mutation>
    <Toast />
  </Fragment>
))
