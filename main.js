window.onload = function(){
    
    //selecting DOM
    const input = document.querySelector('input');
    const trueIronOre = document.getElementById('iron');
    const sumptuousFur = document.getElementById('sump');
    const goblinGliderKit = document.getElementById('glider');

    //variables for logic
    const MAX_RESOURCES = 10000;
    const MIN_RESOURCES = 0;
    const numbers = /[0-9]/g;

    //listening to <input> node for any 'input' and calling updateValue when 'input' detected
    input.addEventListener('input', updateValue);

    //update the text of selected DOM nodes
    function updateValue(e){
        //checking for valid input (number 0-9)
        try {
            e.target.value = e.target.value.match(numbers).join('');
        } catch (error) {
            e.target.value = 0;
        }

        if(e.target.value > MAX_RESOURCES) {
            e.target.value = MAX_RESOURCES;
        }
        if(e.target.value < MIN_RESOURCES){
            e.target.value = MIN_RESOURCES;
        }

        //setting elements
        trueIronOre.textContent = Math.floor(calculateItemAmount(e.target.value, 8));
        sumptuousFur.textContent = Math.floor(calculateItemAmount(e.target.value, 5));
        goblinGliderKit.textContent = calculateGliderAmount(trueIronOre.textContent);
    }

    /*
    calculate how many mats can be bought
    n = 8 for True Iron Ore || n = 5 for Sumptuous Fur
    */
    let calculateItemAmount = (userInput, n) => {
        let input = Math.floor(parseInt(userInput));
        let number = Math.floor(parseInt(n));

        if (Number.isInteger(input)){
            //8 + 5 = 13, required # for gliders. 16 is best trade deal. -32 to leave ~500 resources for mission tables etc.
            let totalItemAmount = number/13*((input/16)-32);

            if(totalItemAmount <= 0){
                return 0
            }else{
               return totalItemAmount; 
            }
            
        }else {
            return 0;
        }
    }
    
    let calculateGliderAmount = (ironOre) => {
        return Math.floor(ironOre/8)
    }

}
