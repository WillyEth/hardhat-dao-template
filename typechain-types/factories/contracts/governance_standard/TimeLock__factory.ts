/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TimeLock,
  TimeLockInterface,
} from "../../../contracts/governance_standard/TimeLock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "CANCELLER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "registered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002301380380620023018339810160408190526200003491620003fd565b82828262000052600080516020620022818339815191528062000222565b6200007c600080516020620022a18339815191526000805160206200228183398151915262000222565b620000a6600080516020620022c18339815191526000805160206200228183398151915262000222565b620000d0600080516020620022e18339815191526000805160206200228183398151915262000222565b620000eb60008051602062002281833981519152336200026d565b6200010660008051602062002281833981519152306200026d565b60005b82518110156200018c5762000150600080516020620022a18339815191528483815181106200013c576200013c62000471565b60200260200101516200026d60201b60201c565b62000179600080516020620022e18339815191528483815181106200013c576200013c62000471565b620001848162000487565b905062000109565b5060005b8151811015620001d657620001c3600080516020620022c18339815191528383815181106200013c576200013c62000471565b620001ce8162000487565b905062000190565b5060028390556040805160008152602081018590527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1505050505050620004b1565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6200027982826200027d565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000279576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002d93390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200034b57600080fd5b919050565b600082601f8301126200036257600080fd5b815160206001600160401b03808311156200038157620003816200031d565b8260051b604051601f19603f83011681018181108482111715620003a957620003a96200031d565b604052938452858101830193838101925087851115620003c857600080fd5b83870191505b84821015620003f257620003e28262000333565b83529183019190830190620003ce565b979650505050505050565b6000806000606084860312156200041357600080fd5b835160208501519093506001600160401b03808211156200043357600080fd5b620004418783880162000350565b935060408601519150808211156200045857600080fd5b50620004678682870162000350565b9150509250925092565b634e487b7160e01b600052603260045260246000fd5b6000600019821415620004aa57634e487b7160e01b600052601160045260246000fd5b5060010190565b611dc080620004c16000396000f3fe6080604052600436106101bb5760003560e01c80638065657f116100ec578063bc197c811161008a578063d547741f11610064578063d547741f14610582578063e38335e5146105a2578063f23a6e61146105b5578063f27a0c92146105e157600080fd5b8063bc197c8114610509578063c4d252f514610535578063d45c44351461055557600080fd5b806391d14854116100c657806391d1485414610480578063a217fddf146104a0578063b08e51c0146104b5578063b1c5f427146104e957600080fd5b80638065657f1461040c5780638f2a0bb01461042c5780638f61f4f51461044c57600080fd5b8063248a9ca31161015957806331d507501161013357806331d507501461038c57806336568abe146103ac578063584b153e146103cc57806364d62353146103ec57600080fd5b8063248a9ca31461030b5780632ab0f5291461033b5780632f2ff15d1461036c57600080fd5b80630d3cf6fc116101955780630d3cf6fc14610260578063134008d31461029457806313bc9f20146102a7578063150b7a02146102c757600080fd5b806301d5062a146101c757806301ffc9a7146101e957806307bd02651461021e57600080fd5b366101c257005b600080fd5b3480156101d357600080fd5b506101e76101e23660046113b9565b6105f6565b005b3480156101f557600080fd5b5061020961020436600461142d565b61068b565b60405190151581526020015b60405180910390f35b34801561022a57600080fd5b506102527fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b604051908152602001610215565b34801561026c57600080fd5b506102527f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6101e76102a2366004611457565b6106b6565b3480156102b357600080fd5b506102096102c23660046114c2565b61076b565b3480156102d357600080fd5b506102f26102e2366004611590565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610215565b34801561031757600080fd5b506102526103263660046114c2565b60009081526020819052604090206001015490565b34801561034757600080fd5b506102096103563660046114c2565b6000908152600160208190526040909120541490565b34801561037857600080fd5b506101e76103873660046115f7565b610791565b34801561039857600080fd5b506102096103a73660046114c2565b6107bb565b3480156103b857600080fd5b506101e76103c73660046115f7565b6107d4565b3480156103d857600080fd5b506102096103e73660046114c2565b610857565b3480156103f857600080fd5b506101e76104073660046114c2565b61086d565b34801561041857600080fd5b50610252610427366004611457565b610911565b34801561043857600080fd5b506101e7610447366004611667565b610950565b34801561045857600080fd5b506102527fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b34801561048c57600080fd5b5061020961049b3660046115f7565b610aa2565b3480156104ac57600080fd5b50610252600081565b3480156104c157600080fd5b506102527ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b3480156104f557600080fd5b50610252610504366004611718565b610acb565b34801561051557600080fd5b506102f261052436600461183f565b63bc197c8160e01b95945050505050565b34801561054157600080fd5b506101e76105503660046114c2565b610b10565b34801561056157600080fd5b506102526105703660046114c2565b60009081526001602052604090205490565b34801561058e57600080fd5b506101e761059d3660046115f7565b610be5565b6101e76105b0366004611718565b610c0a565b3480156105c157600080fd5b506102f26105d03660046118e8565b63f23a6e6160e01b95945050505050565b3480156105ed57600080fd5b50600254610252565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161062081610d94565b6000610630898989898989610911565b905061063c8184610da1565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a60405161067896959493929190611975565b60405180910390a3505050505050505050565b60006001600160e01b03198216630271189760e51b14806106b057506106b082610e90565b92915050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e636106e2816000610aa2565b6106f0576106f08133610ec5565b6000610700888888888888610911565b905061070c8185610f29565b61071888888888610fc5565b6000817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a60405161075094939291906119b2565b60405180910390a361076181611098565b5050505050505050565b60008181526001602052604081205460018111801561078a5750428111155b9392505050565b6000828152602081905260409020600101546107ac81610d94565b6107b683836110d1565b505050565b60008181526001602052604081205481905b1192915050565b6001600160a01b03811633146108495760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6108538282611155565b5050565b60008181526001602081905260408220546107cd565b3330146108d05760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b6064820152608401610840565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b600086868686868660405160200161092e96959493929190611975565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161097a81610d94565b8887146109995760405162461bcd60e51b8152600401610840906119e4565b8885146109b85760405162461bcd60e51b8152600401610840906119e4565b60006109ca8b8b8b8b8b8b8b8b610acb565b90506109d68184610da1565b60005b8a811015610a945780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610a1657610a16611a27565b9050602002016020810190610a2b9190611a3d565b8d8d86818110610a3d57610a3d611a27565b905060200201358c8c87818110610a5657610a56611a27565b9050602002810190610a689190611a58565b8c8b604051610a7c96959493929190611975565b60405180910390a3610a8d81611ab4565b90506109d9565b505050505050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60008888888888888888604051602001610aec989796959493929190611b5f565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610b3a81610d94565b610b4382610857565b610ba95760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b6064820152608401610840565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610c0081610d94565b6107b68383611155565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610c36816000610aa2565b610c4457610c448133610ec5565b878614610c635760405162461bcd60e51b8152600401610840906119e4565b878414610c825760405162461bcd60e51b8152600401610840906119e4565b6000610c948a8a8a8a8a8a8a8a610acb565b9050610ca08185610f29565b60005b89811015610d7e5760008b8b83818110610cbf57610cbf611a27565b9050602002016020810190610cd49190611a3d565b905060008a8a84818110610cea57610cea611a27565b9050602002013590503660008a8a86818110610d0857610d08611a27565b9050602002810190610d1a9190611a58565b91509150610d2a84848484610fc5565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5886868686604051610d6194939291906119b2565b60405180910390a35050505080610d7790611ab4565b9050610ca3565b50610d8881611098565b50505050505050505050565b610d9e8133610ec5565b50565b610daa826107bb565b15610e0f5760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b6064820152608401610840565b600254811015610e705760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b6064820152608401610840565b610e7a8142611c0a565b6000928352600160205260409092209190915550565b60006001600160e01b03198216637965db0b60e01b14806106b057506301ffc9a760e01b6001600160e01b03198316146106b0565b610ecf8282610aa2565b61085357610ee7816001600160a01b031660146111ba565b610ef28360206111ba565b604051602001610f03929190611c52565b60408051601f198184030181529082905262461bcd60e51b825261084091600401611cc7565b610f328261076b565b610f4e5760405162461bcd60e51b815260040161084090611cfa565b801580610f6a5750600081815260016020819052604090912054145b6108535760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b6064820152608401610840565b6000846001600160a01b0316848484604051610fe2929190611d44565b60006040518083038185875af1925050503d806000811461101f576040519150601f19603f3d011682016040523d82523d6000602084013e611024565b606091505b50509050806110915760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b6064820152608401610840565b5050505050565b6110a18161076b565b6110bd5760405162461bcd60e51b815260040161084090611cfa565b600090815260016020819052604090912055565b6110db8282610aa2565b610853576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556111113390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61115f8282610aa2565b15610853576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b606060006111c9836002611d54565b6111d4906002611c0a565b6001600160401b038111156111eb576111eb6114db565b6040519080825280601f01601f191660200182016040528015611215576020820181803683370190505b509050600360fc1b8160008151811061123057611230611a27565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061125f5761125f611a27565b60200101906001600160f81b031916908160001a9053506000611283846002611d54565b61128e906001611c0a565b90505b6001811115611306576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106112c2576112c2611a27565b1a60f81b8282815181106112d8576112d8611a27565b60200101906001600160f81b031916908160001a90535060049490941c936112ff81611d73565b9050611291565b50831561078a5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610840565b80356001600160a01b038116811461136c57600080fd5b919050565b60008083601f84011261138357600080fd5b5081356001600160401b0381111561139a57600080fd5b6020830191508360208285010111156113b257600080fd5b9250929050565b600080600080600080600060c0888a0312156113d457600080fd5b6113dd88611355565b96506020880135955060408801356001600160401b038111156113ff57600080fd5b61140b8a828b01611371565b989b979a50986060810135976080820135975060a09091013595509350505050565b60006020828403121561143f57600080fd5b81356001600160e01b03198116811461078a57600080fd5b60008060008060008060a0878903121561147057600080fd5b61147987611355565b95506020870135945060408701356001600160401b0381111561149b57600080fd5b6114a789828a01611371565b979a9699509760608101359660809091013595509350505050565b6000602082840312156114d457600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611519576115196114db565b604052919050565b600082601f83011261153257600080fd5b81356001600160401b0381111561154b5761154b6114db565b61155e601f8201601f19166020016114f1565b81815284602083860101111561157357600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080608085870312156115a657600080fd5b6115af85611355565b93506115bd60208601611355565b92506040850135915060608501356001600160401b038111156115df57600080fd5b6115eb87828801611521565b91505092959194509250565b6000806040838503121561160a57600080fd5b8235915061161a60208401611355565b90509250929050565b60008083601f84011261163557600080fd5b5081356001600160401b0381111561164c57600080fd5b6020830191508360208260051b85010111156113b257600080fd5b600080600080600080600080600060c08a8c03121561168557600080fd5b89356001600160401b038082111561169c57600080fd5b6116a88d838e01611623565b909b50995060208c01359150808211156116c157600080fd5b6116cd8d838e01611623565b909950975060408c01359150808211156116e657600080fd5b506116f38c828d01611623565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b03121561173457600080fd5b88356001600160401b038082111561174b57600080fd5b6117578c838d01611623565b909a50985060208b013591508082111561177057600080fd5b61177c8c838d01611623565b909850965060408b013591508082111561179557600080fd5b506117a28b828c01611623565b999c989b509699959896976060870135966080013595509350505050565b600082601f8301126117d157600080fd5b813560206001600160401b038211156117ec576117ec6114db565b8160051b6117fb8282016114f1565b928352848101820192828101908785111561181557600080fd5b83870192505b848310156118345782358252918301919083019061181b565b979650505050505050565b600080600080600060a0868803121561185757600080fd5b61186086611355565b945061186e60208701611355565b935060408601356001600160401b038082111561188a57600080fd5b61189689838a016117c0565b945060608801359150808211156118ac57600080fd5b6118b889838a016117c0565b935060808801359150808211156118ce57600080fd5b506118db88828901611521565b9150509295509295909350565b600080600080600060a0868803121561190057600080fd5b61190986611355565b945061191760208701611355565b9350604086013592506060860135915060808601356001600160401b0381111561194057600080fd5b6118db88828901611521565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038716815285602082015260a06040820152600061199d60a08301868861194c565b60608301949094525060800152949350505050565b60018060a01b03851681528360208201526060604082015260006119da60608301848661194c565b9695505050505050565b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616040820152620e8c6d60eb1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611a4f57600080fd5b61078a82611355565b6000808335601e19843603018112611a6f57600080fd5b8301803591506001600160401b03821115611a8957600080fd5b6020019150368190038213156113b257600080fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611ac857611ac8611a9e565b5060010190565b81835260006020808501808196508560051b810191508460005b87811015611b525782840389528135601e19883603018112611b0a57600080fd5b870180356001600160401b03811115611b2257600080fd5b803603891315611b3157600080fd5b611b3e868289850161194c565b9a87019a9550505090840190600101611ae9565b5091979650505050505050565b60a0808252810188905260008960c08301825b8b811015611ba0576001600160a01b03611b8b84611355565b16825260209283019290910190600101611b72565b5083810360208501528881526001600160fb1b03891115611bc057600080fd5b8860051b9150818a602083013781810191505060208101600081526020848303016040850152611bf181888a611acf565b6060850196909652505050608001529695505050505050565b60008219821115611c1d57611c1d611a9e565b500190565b60005b83811015611c3d578181015183820152602001611c25565b83811115611c4c576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611c8a816017850160208801611c22565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611cbb816028840160208801611c22565b01602801949350505050565b6020815260008251806020840152611ce6816040850160208701611c22565b601f01601f19169190910160400192915050565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604082015269206e6f7420726561647960b01b606082015260800190565b8183823760009101908152919050565b6000816000190483118215151615611d6e57611d6e611a9e565b500290565b600081611d8257611d82611a9e565b50600019019056fea2646970667358221220d9eb5e95e4f4b9966fd879e0974f2f9e3af8486a9af3dd919a9d22e9c6df2bbe64736f6c634300080900335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63fd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783";

type TimeLockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimeLockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimeLock__factory extends ContractFactory {
  constructor(...args: TimeLockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    minDelay: PromiseOrValue<BigNumberish>,
    proposers: PromiseOrValue<string>[],
    executors: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TimeLock> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      overrides || {}
    ) as Promise<TimeLock>;
  }
  override getDeployTransaction(
    minDelay: PromiseOrValue<BigNumberish>,
    proposers: PromiseOrValue<string>[],
    executors: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      overrides || {}
    );
  }
  override attach(address: string): TimeLock {
    return super.attach(address) as TimeLock;
  }
  override connect(signer: Signer): TimeLock__factory {
    return super.connect(signer) as TimeLock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimeLockInterface {
    return new utils.Interface(_abi) as TimeLockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimeLock {
    return new Contract(address, _abi, signerOrProvider) as TimeLock;
  }
}
