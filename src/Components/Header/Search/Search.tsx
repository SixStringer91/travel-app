import React from 'react';
import { Input } from 'antd';
import { CompassOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setSearch } from '../../../redux/actionCreators/exampleActionCreator';

type SearchProps = {
	text: string,
	disabled: boolean,
	placeholder:string,
	setInputText(inputText: string): {
    type: string;
    inputText: string;
}
}

const placeholderText:{[key:string]:string} = {
  ru: 'набирайте, сударь',
  en: 'type, sir',
  be: 'набірайце, cпадарства'
};

const SearchUI = ({
  text, disabled, setInputText, placeholder
}: SearchProps) => {
  const searchRef = React.useRef<Input>(null);
  const onSearchEnter = () => setInputText(searchRef.current?.props.value as string);

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
  searchReducer: { text, disabled },
  langReducer: lang
}: any) => (
  {
    placeholder: placeholderText[lang],
    text,
    disabled
  }
);

const MapDispatch = (dispatch: any) => ({
  setInputText: (inputText: string) => dispatch(setSearch(inputText))
});

const Search = connect(MapState, MapDispatch)(SearchUI);

export default Search;
