import { Select } from 'antd';
import { useMemo } from 'react';
import { connect } from 'react-redux';
import { AC } from '../../../redux/action-creators/action-creators';
import { AppThunkDispatch, RootState } from '../../../redux/Store';
import css from './Language.module.css';

const langData = [
  {
    value: 'ru',
    title: 'Rus'
  },
  {
    value: 'en',
    title: 'Eng'
  },
  {
    value: 'be',
    title: 'Bel'
  }
];

type LanguageProps = {
  lang: string;
  setLang: (e: string) => void;
};

const LanguageUI = ({ lang, setLang }: LanguageProps) => {
  const options = useMemo(
    () => langData.map(({ value, title }) => (
      <Select.Option key={value} className={css.optionBlock} value={value}>
        {title}
      </Select.Option>
    )),
    []
  );

  return (
    <>
      <Select
        defaultValue={lang}
        size="small"
        className={css.selectBlock}
        onChange={(e: string) => {
          setLang(e);
        }}
      >
        {options}
      </Select>
    </>
  );
};

const MapState = ({ langReducer }:RootState) => ({
  lang: langReducer.lang
});

const MapDispatch = (dispatch: AppThunkDispatch) => ({
  setLang: (e: string) => {
    dispatch(AC.setLanguage(e));
  }
});

const Language = connect(MapState, MapDispatch)(LanguageUI);

export default Language;
