import Portis from '@portis/web3'
import Web3 from 'web3'
import DataTokenTemplate from './abi/DataTokenTemplate.json'
/* const fs = require('fs'); */
import DTFactory from './abi/DTFactory.json'
import Metadata from './abi/Metadata.json' 
import FixedRateExchange from './abi/FixedRateExchange.json'

const portis = new Portis('517f90d0-d4e4-4100-b716-ae39442ab733', 'rinkeby');
const web3 = new Web3(portis.provider);

const n = document.getElementById('something')

const h = document.getElementById('create_datatoken')
const l = document.getElementById('tkn_name')
const k = document.getElementById('tkn_sym')
const g = document.getElementById('tkn_link')
const d = document.getElementById('tkn_sample')
const t = document.getElementById('tkn_desc')



const timetk =  document.getElementById('timetknbtn')
const Txn_Hash = document.getElementById('tnx_hash')

const auth_link = document.getElementById('auth_link')
const auth_add = document.getElementById('auth_add')

const DataToken_create = () => {
    n.addEventListener( 'click' , async () => {
        
        try{
            const accounts = await web3.eth.getAccounts()
            /* console.log(accounts[0]) */
            const datatoken = new web3.eth.Contract(DTFactory.abi,'0x3fd7A00106038Fb5c802c6d63fa7147Fe429E83a')

            const newdt = await datatoken.methods.createToken('www','bleh','bleh', web3.utils.toWei('1')).send({from: accounts[0]})
            console.log(newdt.events.TokenCreated.returnValues.newTokenAddress)
            const lol = newdt.events.TokenCreated.returnValues.newTokenAddress
            const kl = new web3.eth.Contract(DataTokenTemplate.abi , lol)

            const hg = await kl.methods.mint(accounts[0],web3.utils.toWei('1')).send({from: accounts[0]})
            console.log(hg) 

            /* const fg = await kl.methods.blob().call({from: accounts[0]})
            console.log(fg)
             this is for authenticate button */ 
            
            /* const ll = new web3.eth.Contract(Metadata.abi,'0xFD8a7b6297153397B7eb4356C47dbd381d58bFF4')

            const hh = await ll.methods.create(lol,0,'bleh').send({from: accounts[0]})
            console.log(hh) */

            /* const fxrate = new web3.eth.Contract(FixedRateExchange.abi,'0xeD1DfC5F3a589CfC4E8B91C1fbfC18FC6699Fbde') 

            const te = await fxrate.methods.create('0x8967BCF84170c91B0d24D4302C2376283b0B3a07',lol, web3.utils.toWei('1')).send({from: accounts[0]})
            console.log(te) */
            
        }
        catch(e){
            console.log(e.message);
        }
    })
}

const authenticate_link = () => {
    auth_link.addEventListener( 'click' , async () => {
        try{
            const tm = new web3.eth.Contract(DataTokenTemplate.abi , auth_add)

            const fg = await tm.methods.blob().call({from: accounts[0]})
            console.log(fg)
        }
        catch(e){
            console.log(e.message);
        }
    })
}


function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }



  const timeline = () => {
    timetk.addEventListener("click", async () => {

        const a = await web3.eth.getTransaction(Txn_Hash.value);
        const b = await web3.eth.getBlock(a.blockHash);

        swal("Timestamp for you file is!", timeConverter(b.timestamp) , "info");
        });
      };
document.addEventListener('DOMContentLoaded', async () => {
    try {
        DataToken_create()
        timeline()
        authenticate_link()
    }
   catch (e){
     console.log(e.message);
   }
  });