'use client'
import React, { useState, useEffect } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { prov, initializeAccount } from '@/app/const';

const TopNav = () => {
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    try {
      setLoading(true);

      if (window.ethereum) {
        const web3Instance = prov;
        const account = await initializeAccount();

        setWeb3(web3Instance);
        setConnectedAccount(account);
      } else {
        throw new Error('MetaMask not detected. Please install MetaMask extension.');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = () => {
    if (web3) {
      web3.currentProvider.disconnect();
      setConnectedAccount(null);
    }
  };

  useEffect(() => {
    const handleAccountsChanged = (accounts) => {
      setConnectedAccount(accounts?.[0]);
    };

    const ethereum = window.ethereum;
    if (ethereum) {
      ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return () => {
      if (ethereum) {
        ethereum.off('accountsChanged', handleAccountsChanged);
      }
    };
  }, [web3]);

  const formatAddress = (address) => `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <div className="fixed p-4 w-full flex justify-end top-0 right-0">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {connectedAccount ? (
        <Dropdown>
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-account"
            className="w-64 bg-black text-white p-4 rounded font-semibold relative"
          >
            Connected account: {formatAddress(connectedAccount)}
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
            <Dropdown.Item onClick={disconnectWallet}>Disconnect Wallet</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Button
          variant="primary"
          className="w-64 bg-blue-600 text-white p-4 rounded font-semibold"
          onClick={connectWallet}
          disabled={loading}
        >
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default TopNav;
