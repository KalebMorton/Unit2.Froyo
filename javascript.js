const userInputString = prompt(
    "Enter a list of flavors seperated by commas",
    "vanilla,vanilla,vanilla,strawberry,chocolate,chocolate"
  );

  const flavors = userInputString.split(",");

  console.log(flavors)

function countFlavorAmount(countedFlavor){
    let count = 0;
    for (let i = 0; i < flavors.length; i++){
        if (flavors[i] == countedFlavor){
            count = count + 1;
        }
    }
    return {
        flavorName: countedFlavor,
        flavorAmount: count
    };
}

let alreadyCounted = [];
for (let i = 0; i < flavors.length; i++){
    if (!alreadyCounted.includes(flavors[i])){
        console.log(countFlavorAmount(flavors[i]));
        alreadyCounted.push(flavors[i]);
    }
}

