import { SliderValueLabelUnstyled } from "@mui/base"

const fuelMap = {
    'gas': 1,
    'diesel': 0
}
// console.log(fuelMap['diesel'])
const aspirationMap = {
    'std': 0,
    'turbo': 1
}
const carbodMap = {
    'convertible': 0,
    'hardtop': 1,
    'hatchback': 2,
    'sedan': 3,
    'wagon': 4
}
const drivewheelMap = {
    '4wd': 0,
    'fwd': 1,
    'rwd': 2
}
const engineMap = {
    'dohc': 0,
    'dohcv': 1,
    'ohcv': 5,
    'ohc': 3,
    'I': 2,
    'ohcf': 4, 
    'rotor': 6
}
const fuelsystemMap = {
    'mpfi': 5,
    '2bbl': 1, 
    '1bbl': 0,
    '4bbl': 2, 
    'idi': 3,
    'spfi': 7,
    'spdi': 6, 
    'mfi': 4
}
// inputlist = [doornumber, values.curbweight, cylindernumber, values.enginesize, values.horsepower, values.peakrpm, values.citymileage, values.highwaymileage, values.price, fuel, aspiration, carbody, drivewheel, engine, fuelsystem]

const coeff = [ 9.70693607e+03, -3.27567287e+02, -2.52550550e+04,  3.52560947e+02,
    1.74171271e+03, -1.52149162e+02,  3.06049716e+03, 7.93079145e+03,
    -10.73400803e+00, -2.78516373e+04,  2.78516373e+04,  2.86272329e+04,
   -2.86272329e+04, -9.02270526e+04,  4.48995343e+03,  2.26344547e+04,
    1.01807534e+04,  5.29218911e+04,  9.61468328e+04, -8.77124822e+04,
   -8.43435058e+03,  7.09395782e+04, -6.69397743e+04,  5.69417564e+04,
    4.49788123e+04, -1.48778282e+05,  1.09678831e+05, -6.68209216e+04,
    1.23312233e+05, -3.45364427e+04,  2.76453054e+04, -2.78516373e+04,
   -2.95947674e+04, -2.73449382e+04,  4.71369255e+04, -7.87666786e+04]

// inputlist = [doornumber, values.curbweight, cylindernumber, values.enginesize, values.horsepower, values.peakrpm, values.citymileage, values.highwaymileage, values.price, fuel, aspiration, carbody, drivewheel, engine, fuelsystem]

// 'doornumber', 'curbweight', 'cylindernumber', 'enginesize',
// 'horsepower', 'peakrpm', 'citympg', 'highwaympg', 'price', 'fueltype0', 'fueltype1', 'aspiration0', 'aspiration1',
// 'carbody0', 'carbody1', 'carbody2', 'carbody3', 'carbody4',
// 'drivewheel0', 'drivewheel1', 'drivewheel2', 'enginetype0',
// 'enginetype1', 'enginetype2', 'enginetype3', 'enginetype4',
// 'enginetype5', 'enginetype6', 'fuelsystem0', 'fuelsystem1',
// 'fuelsystem2', 'fuelsystem3', 'fuelsystem4', 'fuelsystem5',
// 'fuelsystem6', 'fuelsystem7'

function LinearRegression(inputList){
    let finalVector = []
    let sales = 0 // return sales (y)

    const intercept = 1323627.7913782678

    for(let i = 0; i < 36; i++){
        finalVector.push(0)
    }

    // console.log(inputList) // works
    for(let i = 0; i < 9; i++){
        finalVector[i] = inputList[i];
        if(typeof(inputList[i]) === 'string'){
            finalVector[i] = parseInt(finalVector[i], 10)
        }
    }
    finalVector[9 + fuelMap[inputList[9]]] = 1
    finalVector[11 + aspirationMap[inputList[10]]] = 1
    finalVector[14 + carbodMap[inputList[11]]] = 1
    finalVector[19 + drivewheelMap[inputList[12]]] = 1
    finalVector[22 + engineMap[inputList[13]]] = 1
    finalVector[29 + fuelsystemMap[inputList[14]]] = 1
    
    // now multiply with the coefficients and get normalised sales
    console.log(finalVector)
    for(let i = 0; i < 36; i++){
        sales += coeff[i] * finalVector[i];
    }
    // denormalize the sales with the sales mean and dev

    // sales = (sales * dev_sales) + mean_sales

    sales += intercept; 
    
    if(sales < 0) sales = 0

    console.log(sales)

    return parseInt(sales);
}

export default LinearRegression