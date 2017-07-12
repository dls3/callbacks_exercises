var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];


// --------------------------------------------------
// EXAMPLE QUESTION
// --------------------------------------------------
/*
  Calculate the total number of transactions.
*/
var totalTransactions = transactions.length;

console.log( 'The total number of transactions is:', totalTransactions );


// --------------------------------------------------
// QUESTION 01
// --------------------------------------------------
/*
  Calculate the total number of 'sales'.

  HINT(S):
  - Not all transactions are 'sales'.
*/

function typeSales(transaction) {
  return transaction.type === 'sale';
}
var numSales = transactions.filter(typeSales).length;

console.log( 'The total number of sales is:', numSales );


// --------------------------------------------------
// QUESTION 02
// --------------------------------------------------
/*
  Calculate the total number of 'purchases'.
*/

function typePurchases(transaction) {
  return transaction.type === 'purchase';
}
var numPurchases = transactions.filter(typePurchases).length;

console.log( 'The total number of purchases is:', numPurchases );


// --------------------------------------------------
// QUESTION 03
// --------------------------------------------------
/*
  Calculate the total number of 'cash' 'sales'.

  HINT(S):
  - Don't forget that 'purchases' can also be made in 'cash'!
*/

function typeCashSales(transaction) {
  return transaction.type === 'sale' && transaction.paymentMethod == 'cash';
}
var numCashSales = transactions.filter(typeCashSales).length;

console.log( 'The total number of cash sales is:', numCashSales );


// --------------------------------------------------
// QUESTION 04
// --------------------------------------------------
/*
  Calculate the total number of 'credit' 'purchases'.

  HINT(S):
  - Make sure to exclude any 'sales' made by 'credit'!
*/

function typeCreditPurchases(transaction) {
  return transaction.type === 'purchase' && transaction.paymentMethod == 'credit';
}
var numCreditPurchases = transactions.filter(typeCreditPurchases).length;

console.log( 'The total number of credit purchases is:', numCreditPurchases );


// --------------------------------------------------
// QUESTION 05
// --------------------------------------------------
/*
  Create an array that includes all of vendors which appear in the transactions data set.
  eg. `[ 'vendor one', 'vendor two', ... ]

  HINT(S):
  - Not all transactions have a 'vendor'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - This array is allowed to contain duplicate values.
*/

var uniqueVendors = [];

function hasVendor(transaction) {
  if(transaction.vendor === undefined) {
    return false;
  } else {
    // return true;
    uniqueVendors.push(transaction.vendor);
  }
};

transactions.filter(hasVendor);

console.log( 'The vendors are: ', uniqueVendors );


// --------------------------------------------------
// QUESTION 06
// --------------------------------------------------
/*
  Create an array that includes all of *unique* customers which appear in the transactions data set.
  eg. `[ 'customer one', 'customer two', ... ]

  HINT(S):
  - Not all transactions have a 'customer'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - Make sure that the resulting array *does not* include any duplicates.
*/

var uniqueCustomers = [];

function hasCustomer(transaction, index) {

  if(transaction.customer === undefined) {
    return false;
  } else {
    return true;
  }
};

function onlyUnique(value, index, self) {

    return self.indexOf(value) === index;
}

var uniqueCustomers =
  transactions
    .filter(hasCustomer)
    .map(function (transaction) {return transaction.customer})
    .filter(onlyUnique);

console.log( 'The unique customers are: ', uniqueCustomers );



// --------------------------------------------------
// QUESTION 07
// --------------------------------------------------
/*
  Create an array of information about the 'sale' transactions which include 5 or more items.

  The array should resemble the following:
  [ { name: 'Customer Name', numItems: 5 }, ... ]

  HINT(S):
  - There may be more than 1 'sale' that includes 5 or more items.
  - Individual transactions do not have either `name` or `numItems` properties, we'll have to add them to the output.
*/

var bigSpenders = [];

transactions.filter(isBigSpender);

function isBigSpender(transaction) {
 if (transaction.items.length >= 5) {
   numItems = transaction.items.length + ' items';
   customerName = transaction.customer
   bigSpenders.push(customerName, numItems);
 }
}

console.log( 'The "big spenders" are:', bigSpenders );



// --------------------------------------------------
// QUESTION 08
// --------------------------------------------------
/*
  Calculate the sum of the *first* 'sale' transaction.

  HINT(S):
  - Transactions don't have 'prices', but their 'items' do!
*/
var sale = transactions.filter(isSale);
var items = sale[0]['items'];

var sumSales = items.reduce(function(sum, item) {
   return sum + item['price'];
 }, 0);

function isSale(transaction) {
   if (transaction.type === 'sale') {
     return true;
   }
 }

var sumSales;

console.log( 'The sum of the first sale is:', sumSales );

// --------------------------------------------------
// QUESTION 09
// --------------------------------------------------
/*
  Calculate the sum of *all* 'purchase' transactions.

  HINT(S):
  - Your solution to 'QUESTION 08' is a good starting point!
  - Make sure to include 'price' information from *all* purchases.
*/

var sumPurchases = isPurchase(transactions).reduce(function(sum, value) {
  return sum + value;
}, 0);

function isPurchase(transactions) {
  var purchases = [];
  for (var i = 0; i < transactions.length; i++) {
  if (transactions[i].type === 'purchase') {
    for (var j = 0; j < transactions[i].items.length; j++) {
      purchases.push(transactions[i].items[j].price);
      }
    }
  }
  return purchases;
}

console.log( 'The sum of all purchases is: ', sumPurchases.toFixed(2) );

// --------------------------------------------------
// QUESTION 10
// --------------------------------------------------
/*
  Calculate the company's net profit.

  This number will be positive if the sum of the sales is greater than the amount spent on purchases.

  Otherwise, this number will be negative.

  HINT(S):
  - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
*/
var netProfit = isSalePurchase(transactions).reduce(function(sum, value) {
  return sum + value;
}, 0);

function isSalePurchase(transactions) {
  var salePurchase = [];
  for (var i = 0; i < transactions.length; i++) {
  if (transactions[i].type === 'purchase' || transactions[i].type === 'sale') {
    for (var j = 0; j < transactions[i].items.length; j++) {
      salePurchase.push(transactions[i].items[j].price);
      }
    }
  }
  return salePurchase;
}

var netProfit;

console.log( 'The net profit is:', netProfit.toFixed(2) );

// --------------------------------------------------
// QUESTION 11
// --------------------------------------------------
/*
  Calculate the most items sold as part of single transaction.

  HINTS:
  - The result of this calculation should be a number (not an array, object, or other data type).
*/

function mostTransactions(highest, transaction) {
  var numItems = transaction['items'].length;
  if (numItems > highest) {
    return numItems;
  } else {
    return highest;
  }
}

var mostItems = transactions.reduce(mostTransactions, 0);

console.log( 'The most items sold in a single transaction is:', mostItems );


// --------------------------------------------------
// QUESTION 12
// --------------------------------------------------
/*
  Calculate the sum of the 'purchase' with the fewest items.
*/
var sumOfSmallestPurchase;

console.log( 'The sum of the smallest purchase is:', sumOfSmallestPurchase );
