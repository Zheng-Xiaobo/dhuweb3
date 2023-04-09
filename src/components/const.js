// const abi=[
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "s",
//                 "type": "string"
//             },
//             {
//                 "name": "t",
//                 "type": "string"
//             }
//         ],
//         "name": "setWord",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [
//             {
//                 "name": "random",
//                 "type": "uint256"
//             }
//         ],
//         "name": "getRandomWord",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint256"
//             },
//             {
//                 "name": "",
//                 "type": "string"
//             },
//             {
//                 "name": "",
//                 "type": "address"
//             },
//             {
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     }
// ]
const abi =[
    {
        "constant": true,
        "inputs": [],
        "name": "getFollowers",
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
        "constant": false,
        "inputs": [
            {
                "name": "_Id",
                "type": "uint256"
            },
            {
                "name": "_fileAddress",
                "type": "string"
            }
        ],
        "name": "addFileAddr",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getMessageById",
        "outputs": [
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
                "type": "uint256"
            },
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
                "type": "uint256"
            },
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_toId",
                "type": "uint256"
            },
            {
                "name": "_content",
                "type": "string"
            },
            {
                "name": "_fileAddress",
                "type": "string"
            }
        ],
        "name": "commentMessage",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getComments",
        "outputs": [
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
        "name": "getFollowing",
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
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_aggree",
                "type": "bool"
            }
        ],
        "name": "voteOnMessage",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getMessageCount",
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
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "startVote",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_followingAddr",
                "type": "address"
            }
        ],
        "name": "addFollowing",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_content",
                "type": "string"
            },
            {
                "name": "_fileAddress",
                "type": "string"
            }
        ],
        "name": "postMessage",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_userAddress",
                "type": "address"
            }
        ],
        "name": "getUserByAddress",
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
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "uint256[]"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "bool"
            },
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
        "constant": false,
        "inputs": [
            {
                "name": "_userName",
                "type": "string"
            },
            {
                "name": "_introduction",
                "type": "string"
            },
            {
                "name": "_headAddr",
                "type": "string"
            }
        ],
        "name": "addUser",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getVoteById",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "bool[]"
            },
            {
                "name": "",
                "type": "bool[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAllUsers",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
// const contractAddress='0xAA0313B90fe7C1f663eab2ac6022dCbE71F2Cac7'
const NFTUploadUrl='https://api.nft.storage/upload'
const contractAddress='0xC6fD343C9d361C839C1D4D24cA20142268cB8839'
const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE5ZWQ5OTAxZTU0Y2FmYzAzNGZBQzllNTNFY0Y4NkRmMzA5ZTcxOTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3OTIwNDEwNDMxOSwibmFtZSI6IndlYjMifQ.tWc_-ubXHYw8Tg9P2CLfq4BtLoFnIEKbxPTnELXFxuQ'
const Authorization='Bearer '
const IPFSGateway=['https://nftstorage.link/ipfs/','https://w3s.link/ipfs/'];
export {abi,contractAddress,NFT_STORAGE_KEY,NFTUploadUrl,Authorization,IPFSGateway}