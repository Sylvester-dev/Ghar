/* import Portis from '@portis/web3'; */
import Web3 from 'web3';
import DataTokenTemplate from './abi/DataTokenTemplate.json';
/* const fs = require('fs'); */
import DTFactory from './abi/DTFactory.json'
import Metadata from './abi/Metadata.json' 

import detectEthereumProvider from '@metamask/detect-provider';

async function loadweb3() {
    const provider = await detectEthereumProvider();

    if (window.ethereum) {
    window.web3 = Web3(window.ethereum)
    
    await window.ethereum.enable()
    }
    /* else if(window.web3){
        window.web3 = new Web3(window.web3.currentProvider)
    } */ else {
    console.log('Please install MetaMask!');
    }
}

/* 
const portis = new Portis('517f90d0-d4e4-4100-b716-ae39442ab733', 'rinkeby');
const web3 = new Web3(portis.provider); */

const n = document.getElementById('something')
const h = document.getElementById('create_datatoken')
const l = document.getElementById('tkn_name')
const k = document.getElementById('tkn_sym')
const g = document.getElementById('tkn_link')
const d = document.getElementById('tkn_sample')
const t = document.getElementById('tkn_desc')

const DataToken_create = () => {
    n.addEventListener( 'click' , async () => {
        
        try{
            const accounts = await web3.eth.getAccounts()
            console.log(accounts[0])
            const datatoken = new web3.eth.Contract(DTFactory.abi,'0x3fd7A00106038Fb5c802c6d63fa7147Fe429E83a')

            const newdt = await datatoken.methods.createToken('bleh','bleh','bleh', 1000000000000000).send({from: accounts[0]})
            console.log(newdt.events.TokenCreated.returnValues.newTokenAddress)
            const lol = newdt.events.TokenCreated.returnValues.newTokenAddress
            const kl = new web3.eth.Contract(DataTokenTemplate.abi , lol)

            const hg = await kl.methods.mint(accounts[0],(1000000000000000)).send({from: accounts[0]})
            console.log(hg) 

            const ll = new web3.eth.Contract(Metadata.abi,'0xFD8a7b6297153397B7eb4356C47dbd381d58bFF4')

            const hh = await ll.methods.create(lol,0,0).send({from: accounts[0]})
            console.log(hh)
            
        }
        catch(e){
            console.log(e.message);
        }
    })
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        


        loadweb3()
        DataToken_create()
        
    }
   catch (e){
     console.log(e.message);
   }
  });