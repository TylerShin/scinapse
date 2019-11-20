import React, { FC } from 'react';
import styled from '@emotion/styled';
import SearchIcon from 'atoms/icons/search.svg';
import { useRouter } from 'next/router';
import SelectableInput from 'components/selectableInput/selectableInput';
import { gql } from 'apollo-boost';
import { getAutoCompleteSearchKeyword } from 'pages/types/getAutoCompleteSearchKeyword';
import { useLazyQuery } from '@apollo/react-hooks';
// TODO: Use lodash-es instead of lodash
import { debounce } from 'lodash';

interface FormValues {
  query: string;
}

interface Props {
  initialValue: string;
}

const SearchIconBox = styled.i`
  cursor: pointer;
`;

const GET_AUTO_COMPLETE_KEYWORDS = gql`
  query getAutoCompleteSearchKeyword($query: String) {
    getAutoCompleteSearchKeyword(query: $query) {
      keyword
    }
  }
`;

const debouncedGetAutoCompleteKeyword = debounce((fetchFunc: Function) => {
  fetchFunc();
}, 200);

const SearchBox: FC<Props> = ({ initialValue }) => {
  const router = useRouter();
  const [getAutoCompleteKeyword, { loading, data: autoCompleteResult }] = useLazyQuery<getAutoCompleteSearchKeyword>(
    GET_AUTO_COMPLETE_KEYWORDS
  );

  const suggestionList = autoCompleteResult?.getAutoCompleteSearchKeyword || [];

  function handleSubmit(query: string) {
    router.push({
      pathname: '/search',
      query: {
        query,
      },
    });
  }

  return (
    <>
      <SelectableInput
        initialValue=""
        availableList={suggestionList.map((word, i) => (
          <li
            onClick={() => {
              handleSubmit(word.keyword);
            }}
            key={i}
          >
            {word.keyword}
          </li>
        ))}
        onSubmitForm={handleSubmit}
        onChangeField={(value: string) => {
          debouncedGetAutoCompleteKeyword(() => {
            getAutoCompleteKeyword({ variables: { query: value } });
          });
        }}
        leadingIcon={
          <SearchIconBox>
            <SearchIcon />
          </SearchIconBox>
        }
      />
    </>
  );
};

export default SearchBox;
