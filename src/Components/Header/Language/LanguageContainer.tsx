import React from 'react';
import { connect } from 'react-redux';
import Language from './Language';
import { setLanguage } from '../../../redux/actionCreators/exampleActionCreator';

const MapStateToProps = (state:any) => {
  return({
    lang: state.langReducer.lang
    
  })
}

const MapDispatchToProps = (dispatch: any, {onLanguageChange}:any) => (
  {
    setLanguage: (e: string) => {
      dispatch(setLanguage(e))},
    onLanguageChange: (e: any) => onLanguageChange(e)
  }
  );

const SearchContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(Language);

export default SearchContainer;