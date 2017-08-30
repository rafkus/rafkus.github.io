window.onload = app;

function app() {
  const submit = document.querySelector("#submit");
  let result = document.querySelector("#result");

  const start_message = 'put a number and press button or enter';
  result.innerHTML = start_message;

  submit.addEventListener("click", function(event){
            event.preventDefault();

            const value = document.querySelector("#input").value;

            if(isValidInput(value)) {
              const primes = findPrimes(value);
              const txt = makeResult(primes);
              printResult(txt);
            } else {
              printResult("wrong input. put a number dude.");
            }
        }, false);


  function isValidInput(value) {
      const reg = /^\d+$/;
      const test = reg.test(value);
      if(!test) { return false; }
      // else if(value <=0) { return false; }
      return true;
  }

  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num !== 1;
  }

  const findPrimes = (num) => {
    let primes = [];
    for(let i = 2; i < num; i++) {
      if(isPrime(i)) { primes.push(i) }
    }
    console.log('find ', primes);
    return primes;
  }

  const makeResult = (primes) => {
    if(!primes.length) { return "no primes"; }
    let msg = "";
    for(let i = 0; i < primes.length; i++) {
      msg += primes[i] + ', ';
    }
    msg = msg.slice(0, -2);
    return msg;
  }

  const printResult = (txt) => {
    result.innerHTML = txt;
  }

} // end of app
