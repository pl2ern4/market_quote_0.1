const headers = {"content-type":"application/json;charset=UTF-8"};

async function getData(url,newHeaders=headers, payload={}, method='GET'){

      const header = {newHeaders,method}
      return await new Promise((resolve,reject)=>{
        fetch(url,newHeaders)
        .then(data=>{
            if(!data.ok){
                return null;
            }
            return data.json();
        })
        .then(data=>resolve(data))
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
            return null;
        });
      }).then(data=>data)      
}

export function submitQuoteApi(payload){
    return getData(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${payload.fromCurrency}/${payload.toCurrency}/${payload.amount}?format=json`).then(data=>data);
}

export function getCurrencyCodeApi(){
    const url = "https://openexchangerates.org/api/currencies.json";
    return getData(url);
}
