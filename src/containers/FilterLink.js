import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import { NavLink } from 'react-router-dom§';

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
)

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter 
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(FilterLink)

export default FilterContainer;