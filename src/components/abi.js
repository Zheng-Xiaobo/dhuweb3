const abi=[
    {
        "constant": false,
        "inputs": [
            {
                "name": "s",
                "type": "string"
            },
            {
                "name": "t",
                "type": "string"
            }
        ],
        "name": "setWord",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "random",
                "type": "uint256"
            }
        ],
        "name": "getRandomWord",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
export {abi}