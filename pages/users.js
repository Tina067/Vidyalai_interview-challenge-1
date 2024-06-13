import React from 'react';
import Footer from '../components/Footer';
import TopNavbar from '../components/Navbar';
import UserList from '../components/UserList';

export default function UsersPage() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <TopNavbar />
      <div style={{ margin: '60px 0 20px' }}>
        <UserList />
      </div>
      <Footer />
      
    </div>
  );
}
