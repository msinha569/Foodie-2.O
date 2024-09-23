import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout = React.memo(() => {
  console.log("Layout Rendered")
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
});

export default Layout;
