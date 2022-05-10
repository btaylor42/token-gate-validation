// alchemy-nft-api/alchemy-web3-script.js
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

// Replace with your Alchemy api key:
const apiKey = "Dn95bwKjVszbjyIDrfl4HEqsMd3wZhPS";

// Initialize an alchemy-web3 instance:
const web3 = createAlchemyWeb3(
  `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`,
);

// The wallet address we want to query for NFTs:
const ownerAddr = "0x99390c75DB58059274d5b015132839CbFb3F4230";
const nfts = await web3.alchemy.getNfts({
  owner: ownerAddr
})

// Print owner's wallet address:
console.log("fetching NFTs for address:", ownerAddr);
console.log("...");

// Print total NFT count returned in the response:
console.log("number of NFTs found:", nfts.totalCount);
console.log("...");

// Check owner NFT for Summit 2022 NFT. Print message, contract address, token ID if found:
for (const nft of nfts.ownedNfts) {
  if (nft.contract.address == "0xda749d35f5be1f7248aa7280b97444739c61fe51") {
      console.log("YAY! THIS IS AWESOME!!");
      console.log("contract address:", nft.contract.address);
      console.log("token ID:", nft.id.tokenId);
  }
  break;

}
console.log("===");

// Fetch metadata for the Summit 2022 NFT:
console.log("fetching metadata for a Summit 2022 NFT...");
const response = await web3.alchemy.getNftMetadata({
  contractAddress: "0xda749d35f5be1f7248aa7280b97444739c61fe51",
  tokenId: "0x01"
})

// Uncomment this line to see the full api response:
console.log(response.metadata);

// Print some commonly used fields:
console.log("NFT name: ", response.title);
console.log("token type: ", response.id.tokenMetadata.tokenType);
console.log("tokenUri: ", response.tokenUri.gateway);
console.log("image url: ", response.metadata.image);
console.log("time last updated: ", response.timeLastUpdated);
console.log("===");