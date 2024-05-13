import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xdD7fC0ccd5901fE59Faabc3cA24E720Ad107CF28";
const rewardTokenContractAddress = "0x916dDb27A4820e00aB595091784852C098C0A1C1";
const stakingContractAddress = "0x4B19af8c584635Abeef7fB24970A343F8e2aCaee";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});