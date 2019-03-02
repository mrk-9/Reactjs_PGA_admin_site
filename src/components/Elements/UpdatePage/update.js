import React from 'react'
import { Mutation } from 'react-apollo'
import { Formik } from 'formik'
import { FluidContainer } from '../../Layout'
import { Form } from '../Forms'
import Toast, { errorNotify, notify } from '../Toast'
import { Errors } from '../Toast/helpers'
import { sanitize } from './helper'

export const validate = (fields) => (values) => {
  return fields.reduce((acc, curr) => {
    if (!values[curr]) {
      acc[curr] = `${curr} is Required`
    }
    return acc
  }, {})
}

export const handleSubmit = ({ history, dataKey, update, id, query }) => async (values, actions) => {
  actions.setSubmitting(true)

  try {
    await update({
      variables: { id, input: sanitize(values) },
      refetchQueries: [{
        query, variables: { id }
      }]
    })
    notify({type: 'success',
      message: `data successfully updated!`,
      timeout: 2000,
      close: () => {
        history.push(`/${dataKey}/${id}`)
      }})
  } catch (error) {
    errorNotify(Errors({ dataKey, error }))
  } finally {
    actions.setSubmitting(false)
  }
}

export default ({ mutation, initialValues, required, dataKey, ...props }) => (
  <FluidContainer>
    <Mutation mutation={mutation}>
      {
        update => {
          return (
            <Formik
              initialValues={initialValues}
              validate={validate(required)}
              onSubmit={handleSubmit({ update, dataKey, ...props })}
              render={(formProps) => (<Form {...formProps} {...props} />)}
            />
          )
        }
      }
    </Mutation>
    <Toast />
  </FluidContainer>
)
