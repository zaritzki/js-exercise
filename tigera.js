/*****************************
 * BANK DATA
 */

const bankCustomers = [
	{
		accountId: "123",
		firstName: "Joe",
		lastName: "Soap",
		address: {
		street: "1 Street Avenue",
		country: "USA"
		}
	},
	{
		accountId: "234",
		firstName: "Jane",
		lastName: "Doe",
		address: {
		address: "2 Street Avenue",
		country: "USA"
		}
	},
	{
		accountId: "567",
		firstName: "Fred",
		lastName: "Smith",
		address: {
		address: "3 Street Avenue",
		country: "France"
		}
	}
];

const bankAccounts = {
	"123": {
		currency: "$",
		balance: 1000,
		transactions: [10234, 300, 333]
	},
	"234": {
		currency: "€",
		balance: 2500,
		transactions: [45, 99, 1024, 85]
	},
	"567": {
		currency: "$",
		balance: 3800,
		transactions: [55, 22]
	},
	"891": {
		currency: "€",
		balance: 3800,
		transactions: [155, 22, 54, 300]
	}
};


/*****************************
 * WORK OUT SOME STUFF based on the bank data above
 */

let janesDetails;
let americanCustomers;
let customerCountries; // no duplicates
let joesFullnameAndBalance;
let totalBanksHoldings;
let totalDollarBanksHoldings;
let customerWithLargestTransaction;


// 1. Janes customer details
const getJaneDoeDetails = [bankCustomers[1]]; 

const getJaneDoeBank = bankAccounts[getJaneDoeDetails[0].accountId];
janesDetails = [...getJaneDoeDetails, getJaneDoeBank];

// 2. American customers
const getAmericanCustomers = bankCustomers.map((customer) => {
	let americanCustomerNames = '';
	if ( customer.address.country === 'USA') {
		americanCustomerNames += customer.firstName + ' ' + customer.lastName;
	}
	return americanCustomerNames;
});
const cleanAmericanCustomers = getAmericanCustomers.filter(el => {
	return el !== '';
});
americanCustomers = cleanAmericanCustomers;

// 3. Joes bank balance
const getJoeSoapDetails = [bankCustomers[0]]; 
const getJoeBankBalance = bankAccounts[getJoeSoapDetails[0].accountId].balance;
joesFullnameAndBalance = getJoeBankBalance;


// 4 & 5 Func - Bank holdings
const getBankHoldings = (obj) => {
	let totalInUSD = 0;
	let totalInEUR = 0;
	for ( let i in obj) {
		if ( obj[i].currency === '$' ) {
			totalInUSD += parseFloat( obj[i].balance );
		}
		if ( obj[i].currency === '€' ) {
			totalInEUR += parseFloat( obj[i].balance );
		}
	}
	return [{'$': totalInUSD}, {'€': totalInEUR}]
}

// 4. Bank holdings
totalBanksHoldings = getBankHoldings(bankAccounts);

// 5. Bank holdings in $
totalDollarBanksHoldings = getBankHoldings(bankAccounts)[0];


// 6. Customer countries
const getCustomerCountries = bankCustomers.map((customer) => {
	let countries = '';
	countries += customer.address.country;
	return countries;
});
customerCountries = [...new Set(getCustomerCountries)];

// 7. Customer w/ largest transaction
const getCustomerWithLargestTransaction = (obj) => {
	let accountId = 0,
		sum = 0;
	
	// TODO:

	return accountId;
}

customerWithLargestTransaction = getCustomerWithLargestTransaction(bankAccounts);




/*****************************
 * SHOW THE RESULTS => open up console ======>
 */

console.log("============================");
console.log("The results:");
console.log("============================");
console.log("Janes customer details:", janesDetails);
console.log("American customers:", americanCustomers);
console.log("Joes bank balance:", joesFullnameAndBalance);
console.log("Bank holdings:", totalBanksHoldings);
console.log("Bank holdings in $:", totalDollarBanksHoldings);
console.log("Customer countries:", customerCountries);
console.log("Customer w/ largest transaction:", customerWithLargestTransaction);
