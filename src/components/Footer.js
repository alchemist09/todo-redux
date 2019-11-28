import React from 'react';
import FilterContainer from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <p>
    Show <FilterContainer filter={VisibilityFilters.SHOW_ALL}>All</FilterContainer>
    {', '}
    <FilterContainer filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterContainer>
    {', '}
    <FilterContainer filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterContainer>
  </p>
)

export default Footer;