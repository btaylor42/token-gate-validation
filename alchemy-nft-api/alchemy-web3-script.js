// alchemy-nft-api/alchemy-web3-script.js
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

// Replace with your Alchemy api key:
const apiKey = "Dn95bwKjVszbjyIDrfl4HEqsMd3wZhPS";

// Initialize an alchemy-web3 instance:
const web3 = createAlchemyWeb3(
  `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`,
);

// The wallet address we want to query for NFTs:
// const ownerAddr = "0xC33881b8FD07d71098b440fA8A3797886D831061";
const ownerAddr = "0x966fbD6459B1eaF8e2C1e87C96D5c78622404201";
const nfts = await web3.alchemy.getNfts({
  owner: ownerAddr
})

// Print owner's wallet address:
console.log("fetching NFTs for address:", ownerAddr);
console.log("...");

// Print total NFT count returned in the response:
console.log("number of NFTs found:", nfts.totalCount);
console.log("...");

// Print contract address and tokenId for each NFT:
for (const nft of nfts.ownedNfts) {
  console.log("===");
  console.log("contract address:", nft.contract.address);
  console.log("token ID:", nft.id.tokenId);
}
console.log("===");

// Fetch metadata for a particular NFT:
// console.log("fetching metadata for a crypto coven NFT...");
// const response = await web3.alchemy.getNftMetadata({
// //   contractAddress: "0x5180db8F5c931aaE63c74266b211F580155ecac8",\,
// //   contractAddress: "0xda749d35f5be1f7248aa7280b97444739c61fe51", Summit 2022 Etheruem Contract Address,
//   contractAddress: "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e",
//   tokenId: "0x00000000000000000000000000000000000000000000000000000000000017fa"
// })

// Uncomment this line to see the full api response:
// console.log(response.metadata);

// Print some commonly used fields:
// console.log("NFT name: ", response.title);
// console.log("token type: ", response.id.tokenMetadata.tokenType);
// console.log("tokenUri: ", response.tokenUri.gateway);
// console.log("image url: ", response.metadata.image);
// console.log("time last updated: ", response.timeLastUpdated);
// console.log("===");