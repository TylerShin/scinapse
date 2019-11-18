import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER } from 'graphql-client/user';
import Logo from 'atoms/icons/scinapse-logo.svg';
import { GetCurrentUser } from 'components/authForm/types/GetCurrentUser';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SearchBox from 'components/searchBox/searchBox';

const Nav = styled.nav`
  width: 100%;
  height: 64px;
  background-color: white;
  border-bottom: 1px solid $gray300;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafbfc;
  border-bottom: 1px solid #f1f3f6;
`;

const SearchBoxWrapper = styled.div`
  flex: 1 0 auto;
`;

const Header: FC = () => {
  const router = useRouter();
  const onHomePage = router.pathname === '/';
  const { data: user } = useQuery<GetCurrentUser>(CURRENT_USER);
  const searchQuery = (router.query.query as string) || '';

  return (
    <Nav>
      <Link href="/">
        <a>
          <Logo style={{ width: 122, height: 32 }} />
        </a>
      </Link>
      {!onHomePage && (
        <SearchBoxWrapper>
          <SearchBox initialValue={searchQuery} />
        </SearchBoxWrapper>
      )}
      <div>{user?.currentUser?.member?.email || 'not logged in'}</div>
    </Nav>
  );
};

export default Header;
