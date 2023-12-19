import Web3 from "web3";
import { giftcard_abi } from "./abi/abi";

// Check if window is defined before using it
const prov = typeof window !== "undefined" ? new Web3(window.ethereum) : null;

export const initializeAccount = async () => {
  try {
    if (window.ethereum) {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return account;
    } else {
      throw new Error('MetaMask not detected. Please install MetaMask extension.');
    }
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

//const account = initializeAccount();

const urls = {
  Http_rpc: "https://seednode.mindchain.info",
  WS_rpc: "wss://seednode.mindchain.info/ws",
  explorer: "https://mainnet.mindscan.info/api/v2/"
};

const contracts = {
  giftcard_abi: giftcard_abi,
  giftcardV2: "0x13a0bD967b00c876587D7EB6D48cA1d506467A93",
  multicall: "0x7B1f198bE2Dd0884a2d8A459f4F71bf557E73D8A"
};

export { prov, urls, contracts };
