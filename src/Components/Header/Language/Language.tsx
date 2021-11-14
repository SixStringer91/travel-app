import { Select } from 'antd';
import { useMemo } from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../../redux/actionCreators/exampleActionCreator';
import css from './Language.module.css';

const { Option } = Select;

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
  setLang: (e: any) => void
};

const LanguageUI = ({ lang, setLang }: LanguageProps) => {
  const options = useMemo(() => langData
    .map(({ value, title }) => <Option key={value} className={css.optionBlock} value={value}>{title}</Option>), []);

  return (
    <>
      <Select
        defaultValue={lang}
        size="small"
        className={css.selectBlock}
        onChange={(e: any) => {
          setLang(e);
        }}
      >
        {options}
      </Select>
    </>
  );
};

const MapState = ({ langReducer }: any) => ({
  lang: langReducer
});

const MapDispatch = (dispatch: any) => ({
  setLang: (e: any) => {
    dispatch(setLanguage(e));
  }
});

const Language = connect(MapState, MapDispatch)(LanguageUI);

export default Language;
