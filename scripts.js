const convertButton = document.querySelector(".convert-button") /* Variavél, Documento , selecionado class html */
const currencySelect = document.querySelector(".currency-select")


const convertValues = async() => {
   const inputCurrencyValue = document.querySelector(".input-currency").value // .Value pegar somente o valor do input
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real 
   const currencyValueConverted = document.querySelector(".currency-value") // Outras Moedadas

// async await  promosie
   const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())

   console.log(data)

   const dolar = data.USDBRL.high
   const euro = data.EURBRL.high
   const bitcoin = data.BTCBRL.high
   



   if (currencySelect.value == "dolar") { // Se o select estiver selecionado valor dolar, entre aqui 
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dolar)

   }

   if (currencySelect.value == "euro") { // Se o select estiver selecionado valor EURO, entre aqui 
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / euro)


   }

   if (currencySelect.value == "Bitcoin") { // Se o select estiver selecionado valor BITCOIN, entre aqui 
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "BTC"
      }).format(inputCurrencyValue / bitcoin)


   }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)


  // console.log(convertedValue)

}

function changeCurrency () {
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")

if (currencySelect.value == "dolar") {
currencyName.innerHTML = "Dólar Americano"
currencyImage.src = "./assets/dolar.png"
}




if (currencySelect.value == "euro") {
currencyName.innerHTML = "Euro"
currencyImage.src = "./assets/euro.png"
}

if (currencySelect.value == "Bitcoin") {
   currencyName.innerHTML = "Bitcoin"
   currencyImage.src = "./assets/bitcoin.png"
   }

convertValues()
}

currencySelect.addEventListener ("change",changeCurrency)
convertButton.addEventListener("click", convertValues)  /* 2° entrada variavél */


