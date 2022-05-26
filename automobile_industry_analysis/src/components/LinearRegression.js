// one hot encodings
// value corres to key represents the index where 1 is to placed in the array obtained from encoding
const fuelMap = {
    'gas': 1,
    'diesel': 0
}
const aspirationMap = {
    'std': 0,
    'turbo': 1
}
const carbodyMap = {
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

// this is the input format for linear regression model (requires one hot encoding of certain feature types)

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
    let sales = 0 // return sales 

    const intercept = 1323627.7913782678 // from linear regression

    // initialize an array of length 36
    for(let i = 0; i < 36; i++){
        finalVector.push(0)
    }

    // user's input is a 15 length array but since we used one-hot encoding in linear regression
    // we must first convert user input in the same format. this is done by encoding features like 
    // enginetype and fuel using the same one hot encoding. The maps at the start of the file
    // depict the one hot encoded value at for each feature type, for ex, 'ohcv': 5 means 
    // the 'ohcv' engine type is encoded as [0, 0, 0, 0, 0, 1, 0] with 1 at the 5th index.

    // first 9 values weren't one hot encoded so we can simply fit them in
    for(let i = 0; i < 9; i++){
        finalVector[i] = inputList[i];
        // in case typeof the value is string we can typecast it into int using pasrseInt funtion 
        // using a radix 10 (or base 10)
        if(typeof(inputList[i]) === 'string'){
            finalVector[i] = parseInt(finalVector[i], 10)
        }
    }

    // now dp one hot encoding for values (present on indices ranging from 9 to 14 in the inputList).
    // the respective Map returns the index where 1 is to be placed corresponding to a particular 
    // feature type. Like hatckback is encoded as [0, 0, 1, 0, 0] so we put 1 at the second index
    // from the base id which is 14 for carbody (since carbody's one hot encoding ranges over the indices
    // [14, 18])

    finalVector[9 + fuelMap[inputList[9]]] = 1
    finalVector[11 + aspirationMap[inputList[10]]] = 1
    finalVector[14 + carbodyMap[inputList[11]]] = 1
    finalVector[19 + drivewheelMap[inputList[12]]] = 1
    finalVector[22 + engineMap[inputList[13]]] = 1
    finalVector[29 + fuelsystemMap[inputList[14]]] = 1
    
    // now multiply with the coefficients and add them all up to get the sales

    for(let i = 0; i < 36; i++){
        sales += coeff[i] * finalVector[i];
    }

    // y = m1x1 + m2x2 + ..... m36x36 + intercept (here [m1, m2, .... m36] is the
    // coeff array and [x1, x2..... x36] is the 'finalVector' derived from inputList)

    // to get the sales using the straight line equation we add the intercept
    sales += intercept; 
    
    if(sales < 0) sales = 0

    // incase sales are negative we simply return 0

    return parseInt(sales, 10); // return a whole number
}

export default LinearRegression