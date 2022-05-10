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

// Create a NFTs object
const nfts = await web3.alchemy.getNfts({
    owner: ownerAddr
})

// Contract address of NFT to validate against
const summitContractAddress = "0xda749d35f5be1f7248aa7280b97444739c61fe51";

const response = await web3.alchemy.getNftMetadata({
contractAddress: summitContractAddress,
tokenId: "0x01"
})

// Initializing additional variables
const totalNFTCount = nfts.totalCount;
const nftsOwned = nfts.ownedNfts;

// Print owner's wallet address:
console.log("Fetching NFTs for address:", ownerAddr);
console.log("...");

// Print total NFT count returned in the response:
console.log("Number of NFTs found:", totalNFTCount);
console.log("...");

// Function to check owner NFTs for Summit 2022 NFT. Display message, contract address, token ID if found:
function tokenValidation(nftsOwned, summitContractAddress) {
    for (const nft of nftsOwned) {
        if (nft.contract.address == summitContractAddress) {
            console.log("Success");
            console.log("contract address:", nft.contract.address);
            console.log("token ID:", nft.id.tokenId);
            return;
        }
    }
    console.log("Fail");
}
// Display metadata for the Summit 2022 NFT:
function displayNFTMetadata() {
    console.log("Fetching metadata for a Summit 2022 NFT...");
    console.log(response.metadata);
}

tokenValidation(nftsOwned, summitContractAddress);

console.log("=================");

displayNFTMetadata();

// Uncomment this line to see the full api response:
// console.log(response.metadata);

// Print some commonly used fields:
// console.log("NFT name: ", response.title);
// console.log("token type: ", response.id.tokenMetadata.tokenType);
// console.log("tokenUri: ", response.tokenUri.gateway);
// console.log("image url: ", response.metadata.image);
// console.log("time last updated: ", response.timeLastUpdated);
// console.log("===");