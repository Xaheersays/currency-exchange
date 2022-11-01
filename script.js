document.addEventListener("DOMContentLoaded",()=>{

    document.querySelector("#currency-converter").addEventListener("submit",(event)=>{
        event.preventDefault();
        const {target:{from,to,amount}}=event;   
        var headers = new Headers();
        headers.append("apikey", "MKcKzKYUvbYuTFW0lQFoQVKjhCXjP49F");
        
        var requestOptions = {
          method: 'GET',
          headers
        };

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data);

            let {info,date,query:{to},result} = data;

            document.querySelector("#result").innerHTML =`As per the exchange rate : ${info.rate} for : ${date} --> converted  value in ${to} is ${result}`;
        })
        .catch(error=>console.log(error));
        

    });

});
