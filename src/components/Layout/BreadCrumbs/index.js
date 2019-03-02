import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'

const StyledBreadcrumb = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: .75rem 1rem;
  margin-bottom: 1.5rem;
  list-style: none;
  background-color: ${props => props.theme.colors.white};
  position: relative;
  border-bottom: 1px solid ${props => props.theme.colors.gray.gray300};
`

const StyledBreadcrumbItem = styled.li`
  color: ${props => props.theme.colors.gray.base};
  text-transform: capitalize;
  &:not(:first-child)::before {
    display: inline-block;
    padding-right: .5rem;
    padding-left: .5rem;
    content: "/";
  }
  a {
    color: ${props => props.theme.colors.primary.base};
    text-decoration: none;
    background-color: transparent;

    :hover {
      color: ${props => props.theme.colors.primary.dark};
      text-decoration: underline;
    }
  }
`
const renderHome = (props) => (<BreadcrumbsItem title={'home'} {...props} />)

export const Breadcrumbs = () => (
  <nav aria-label='breadcrumb'>
    <StyledBreadcrumb>
      <Route path='/' component={(props) => renderHome(props)} />
      <Route path='/:path' component={BreadcrumbsItem} />
    </StyledBreadcrumb>
  </nav>
)

export const BreadcrumbsItem = ({ match, ...rest }) => (
  <Fragment>
    <StyledBreadcrumbItem>
      {
        match.isExact
          ? rest.title || match.params.path
          : <Link to={match.url || ''}>
            {rest.title || match.params.path}
          </Link>
      }
    </StyledBreadcrumbItem>
    <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
  </Fragment>
)

export default {
  Breadcrumbs,
  BreadcrumbsItem
}
