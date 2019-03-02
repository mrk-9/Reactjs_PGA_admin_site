import React, { Fragment } from 'react'
import { Field, Form } from 'formik'
import ShowcaseCard from '../../ShowcaseCard'
import Forms from '../'
import { Wrapper, Errors, GroupWrapper, SectionHeader, FormButtons, getInputProps } from './helpers'

export const Section = ({ elements, group, name, ...rest }) => (
  <Fragment>
    <SectionHeader>{group}</SectionHeader>
    <hr />
    <GroupWrapper>
      { elements.map(renderElement(rest)) }
    </GroupWrapper>
  </Fragment>
)

export const renderElement = (rest) => (item) => {
  const { errors, touched } = rest
  const { name, component, group, elements } = item
  if (elements && Array.isArray(elements)) {
    return <Section key={name} name={name} elements={elements} group={group} {...rest} />
  }
  const Component = Forms[component]
  return (
    <Wrapper key={name}>
      <Field
        name={name}
        render={({ field }) => <Component {...getInputProps({...rest, ...item, field})} />}
      />
      {errors[name] && touched[name] && <Errors>{errors[name]}</Errors>}
    </Wrapper>
  )
}

export default ({
  values,
  errors,
  dirty,
  touched,
  handleReset,
  isSubmitting,
  setFieldValue,
  setFieldTouched,
  formElements,
  title
}) => (
  <Form>
    <ShowcaseCard header={title} footer={<FormButtons dirty={dirty} handleReset={handleReset} isSubmitting={isSubmitting} />}>
      {
        formElements.map(renderElement({ values, setFieldValue, setFieldTouched, errors, touched }))
      }
    </ShowcaseCard>
  </Form>
)
