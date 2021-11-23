import React from 'react';
import { Input } from 'antd';
import { CompassOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { AppThunkDispatch, RootState } from '../../../../redux/Store';
import { AC } from '../../../../redux/action-creators/action-creators';

type SearchProps = {
	text: string,
	disabled: boolean,
	placeholder:string,
	setInputText(inputText: string):void
}

const placeholderText = {
  ru: 'набирайте, сударь',
  en: 'type, sir',
  be: 'набірайце, cпадарства'
};

const Search = ({
  text, disabled, setInputText, placeholder
}: SearchProps) => {
  const searchRef = React.useRef<Input>(null);
  const onSearchEnter = () => {
    setInputText(searchRef.current?.props.value as string);
  };

  React.useEffect(() => {
    searchRef.current?.focus({
      cursor: 'end'
    });
  });

  return (
    <>
      <Input.Search
        size="middle"
        disabled={disabled}
        ref={searchRef}
        allowClear
        onPressEnter={onSearchEnter}
        onSearch={onSearchEnter}
        onChange={(e) => setInputText(e.target.value)}
        value={text}
        placeholder={placeholder}
        prefix={<CompassOutlined />}
      />
    </>
  );
};

const MapState = ({
  search: { text, disabled },
  language: { lang }
}: RootState) => (
  {
    placeholder: placeholderText[lang],
    text,
    disabled
  }
);

const MapDispatch = (dispatch: AppThunkDispatch) => ({
  setInputText: (inputText: string) => {
    dispatch(AC.setSearch(inputText));
  }
});

export default connect(MapState, MapDispatch)(Search);
