import React from 'react';
import { Sidebar } from '../../company/sidebar/sidebar';
// import {Sidebar} from '../../individual/sidebar/sidebar'
import Topnav from '../../individual/topnav/topnav';
import {
  LayoutContent,
  LayoutContentMain,
  LayoutWrapper,
} from './style-layout';
const Layout = ({ children }) => {
  return (
    <>
      {/* Layout for Company */}
      {/* <LayoutWrapper>
        <Sidebar/>
        <LayoutContent>
          <Topnav/>
          <LayoutContentMain active>
            {children}
          </LayoutContentMain>
        </LayoutContent>
      </LayoutWrapper> */}

      {/* Layout for Individual */}
      <LayoutWrapper>
        <Sidebar />
        <LayoutContent>
          <Topnav />
          <LayoutContentMain active>{children}</LayoutContentMain>
        </LayoutContent>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
