import {
  ThirdwebNftMedia,
  useNFT,
  useNFTCollection,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useState } from "react";

const contractAddress = "0xef1eE1C9E2EAE96B2500daC8e4965E8247989CAf";
const Gallery: NextPage = () => {
  const contract = useNFTCollection(contractAddress);
  const [nftId, setNftId] = useState(0);
  const { data: nft, isLoading } = useNFT(contract, nftId);
  return (
    <div className="bg-orange-600">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-70 lg:aspect-none">
              <div>
                {!isLoading && nft ? (
                  <div className="w-full h-full">
                    <ThirdwebNftMedia metadata={nft.metadata} />
                  </div>
                ) : (
                  <p>Loading... </p>
                )}
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={nft?.metadata.uri}>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    <p>{nft?.metadata.name}</p>
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Owner : ...{nft?.owner.substring(22)}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                <p>{nft?.metadata.id.toNumber()}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
