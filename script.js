let contractAddress = "0xB9E612c0A19987568b79573af8c0708979F90af1";
let abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_note",
        type: "string",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];


 contractAddress = "0x67108595Db2367aF7E92F5CE2aEF1a4c2436aFA6";
 abi = [
     {
       inputs: [],
       stateMutability: "nonpayable",
       type: "constructor",
     },
     {
       inputs: [
         {
           internalType: "uint256",
           name: "requested",
           type: "uint256",
         },
         {
           internalType: "uint256",
           name: "available",
           type: "uint256",
         },
       ],
       name: "InsufficientBalance",
       type: "error",
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: false,
           internalType: "address",
           name: "from",
           type: "address",
         },
         {
           indexed: false,
           internalType: "address",
           name: "to",
           type: "address",
         },
         {
           indexed: false,
           internalType: "uint256",
           name: "amount",
           type: "uint256",
         },
       ],
       name: "Send",
       type: "event",
     },
     {
       inputs: [
         {
           internalType: "address",
           name: "",
           type: "address",
         },
       ],
       name: "balances",
       outputs: [
         {
           internalType: "uint256",
           name: "",
           type: "uint256",
         },
       ],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [
         {
           internalType: "address",
           name: "receiver",
           type: "address",
         },
         {
           internalType: "uint256",
           name: "amount",
           type: "uint256",
         },
       ],
       name: "mint",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [],
       name: "minter",
       outputs: [
         {
           internalType: "address",
           name: "",
           type: "address",
         },
       ],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [
         {
           internalType: "address",
           name: "sender",
           type: "address",
         },
         {
           internalType: "address",
           name: "receiver",
           type: "address",
         },
         {
           internalType: "uint256",
           name: "amount",
           type: "uint256",
         },
       ],
       name: "send",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
     },
   ];



const provider = new ethers.providers.Web3Provider(window.ethereum);

let signer;


let contract;

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    contract = new ethers.Contract(contractAddress, abi, signer);
  });
});

async function setNote() {
  const note = document.getElementById("note_text").value;
  await contract.set(note);
}

async function getNote() {
  const note = await contract.get();
  document.getElementById("fetched_note").innerText = note;
}
