import React from 'react';
import { Button } from 'react-bootstrap';

const TopNav = () => {
  return (
    <div className='fixed p-[10px] w-full flex justify-end top-0 right-0'>
      <Button
        variant="primary"
        className="md:w-[250px]"
        style={{
          backgroundColor: '#262e38', 
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Connect Wallet
      </Button>
    </div>
  );
};

export default TopNav;
