import got from 'got';
import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('517f90d0-d4e4-4100-b716-ae39442ab733', 'rinkeby');
const web3 = new Web3(portis.provider);

const l = document.getElementById("something")

const messariwork = () => {
    l.addEventListener("click" , async () => {
        try {
          web3.eth.getAccounts((error, accounts) => {
            console.log(accounts);
          });
          const response = await got("https://data.messari.io/api/v1/assets/btc/metrics/market-data")
      /* .then(response => {
          console.log(response.body);
        }); */
          console.log(response.body)
        }
        catch (error) {
        console.log(error)
      } 
    })
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        messariwork();
        /* web3load() */
    }
   catch (e){
     console.log(e.message);
   }
  });