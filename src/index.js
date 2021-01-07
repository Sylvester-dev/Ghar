import detectEthereumProvider from '@metamask/detect-provider';



async function web3load() {
  const provider = await detectEthereumProvider();

  if (provider) {
    // From now on, this should always be true:
    // provider === window.ethereum
    startApp(provider); // initialize your app
  } else {
    console.log('Please install MetaMask!');
  } 
}



const messariwork = () => {
    something.addEventListener("click" , async() => {
        require("got")
  .get("https://data.messari.io/api/v1/assets/btc/metrics/market-data")
  .then(response => {
    console.log(response.body);
  });
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