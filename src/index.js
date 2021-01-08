import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('517f90d0-d4e4-4100-b716-ae39442ab733', 'rinkeby');
const web3 = new Web3(portis.provider);

const h = document.getElementById('create_datatoken')
const l = document.getElementById('tkn_name')
const k = document.getElementById('tkn_sym')
const g = document.getElementById('tkn_link')
const d = document.getElementById('tkn_sample')
const t = document.getElementById('tkn_desc')

const DataToken_create = () => {
    h.addEventListener( 'click' , async () => {
        
    })
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        DataToken_create()
        
    }
   catch (e){
     console.log(e.message);
   }
  });