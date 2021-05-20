if (window.ethereum) {
	web3 = new Web3(window.ethereum);
	window.eth_requestAccounts();
}
else {
	web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.50.75:8545"));
} // Ganache用

/*if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
}
else {
	// set the provider you want from Web3.providers
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}*/



var infoContract = new web3.eth.Contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_payee",
				"type": "address"
			}
		],
		"name": "buy",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fundraiser",
				"type": "address"
			}
		],
		"name": "donate",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_password",
				"type": "string"
			}
		],
		"name": "signUpDonor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_password",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_phoneNumber",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			}
		],
		"name": "signUpFundraiser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_password",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_phoneNumber",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			}
		],
		"name": "signUpPayee",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "donorList",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "fundraiserList",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_fundraiser",
				"type": "address"
			}
		],
		"name": "getBuyList",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDonorList",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getFunList_d",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getFunList_p",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPayeeList_f",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_fundraiser",
				"type": "address"
			}
		],
		"name": "getTotalValue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTotalValue_f",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "howMuch_f",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "payeeList",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_fundraiser",
				"type": "address"
			}
		],
		"name": "search",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_fundraiser",
				"type": "address"
			}
		],
		"name": "searchHowMuch_d",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_payee",
				"type": "address"
			}
		],
		"name": "searchHowMuch_f",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_fundraiser",
				"type": "address"
			}
		],
		"name": "searchHowMuch_p",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_fundraiser",
				"type": "address"
			}
		],
		"name": "searchMyValue",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_funOrPayee",
				"type": "address"
			}
		],
		"name": "showFunOrPayeeInfo",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_password",
				"type": "string"
			}
		],
		"name": "verify",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
], '0xb59701ABb25275D16138caD7d114346047fdd28D');