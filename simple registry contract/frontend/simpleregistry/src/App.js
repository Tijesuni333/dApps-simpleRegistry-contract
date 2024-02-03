import logo from './logo.svg';
import './App.css';

const { ethers } = require("ethers");
const contractABI = require('./abi.json');

function App() {

  const contractAddress = '0xFA4F3F6cC56cCac838b0fa56ec019E81f331d50f'


  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function updateName() {
    if (typeof window.ethereum !== 'undefined') {    
      await requestAccount(); 
        
      const provider = new ethers.BrowserProvider(window.ethereum);    
      const signer = await provider.getSigner();    
      const contract = new ethers.Contract(contractAddress, contractABI, signer);    
  
      try {    
        const newName = document.getElementById("newName").name;
       

        const transaction = await contract.updateName();    
        await transaction.wait();    
        console.log('Name Updated');
  
      } catch (err) {    
        console.error('Error:', err);    
      }
  
    }
  }
  
  async function updateAge() {
    if (typeof window.ethereum !== 'undefined') {    
      await requestAccount(); 
        
      const provider = new ethers.BrowserProvider(window.ethereum);    
      const signer = await provider.getSigner();    
      const contract = new ethers.Contract(contractAddress, contractABI, signer);    
  
      try {    

        const newAge = document.getElementById("newAge");
        const transaction = await contract.updateAge();    
        await transaction.wait();    
        console.log('Age Updated');
  
      } catch (err) {    
        console.error('Error:', err);    
      }
  
    }
  }

  async function getEntityDetails() {
    if (typeof window.ethereum !== 'undefined') {    
      await requestAccount(); 
        
      const provider = new ethers.BrowserProvider(window.ethereum);    
      const signer = await provider.getSigner();    
      const contract = new ethers.Contract(contractAddress, contractABI, signer);    
  
      try {    
        const transaction = await contract.getEntityDetails();    
        await transaction.wait();    
        console.log('Age Updated');
  
      } catch (err) {    
        console.error('Error:', err);    
      }
  
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <label for="newName">Enter Name</label>
        <input id="newName"></input>
        <label for="newAge">Enter Age</label>
        <input id="newAge"></input>
        <button onClick={updateName}>Update name</button>
        <button onClick={updateAge}>update age</button>
        <button onClick={getEntityDetails}>View Entity</button>
      </header>
    </div>
  );
}

export default App;
