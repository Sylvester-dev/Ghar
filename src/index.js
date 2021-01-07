const detectEthereumProvider = require('@metamask/detect-provider')
const got = require('got');


async function web3load() {

  try {
    const provider = await detectEthereumProvider();

    if (provider) {
      // From now on, this should always be true:
      // provider === window.ethereum
      startApp(provider); // initialize your app
    } else {
      console.log('Please install MetaMask!');
    } 
  }
  catch (e){
  console.log(e.message);
  }
}



const messariwork = () => {
    document.getElementById("something").addEventListener("click" , async() => {
        try {
          const response = await got("https://data.messari.io/api/v1/assets/btc/metrics/market-data")
      .then(response => {
          console.log(response.body);
        });
        }
        catch (error) {
        console.log(error)
      } 
    })
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        messariwork()
        web3load()
    }
   catch (e){
     console.log(e.message);
   }
  });