import { Ifo } from './types'

const ifos: Ifo[] = [
  {
    id: 'DogSwap',
    address: '0x1628160C66e0330090248a163A34Ba5B5A82D4f7',
    isActive: true,
    name: 'DogSwap',
    subTitle: 'The MintMe base token that created this AMM',
    description:
      'DogSwap was created for the interaction between MintMe and this AMM Dex to support other tokens. Buying this token will give access to be part of the base tokens.',
    launchDate: 'May 1',
    launchTime: '4PM SGT',
    saleAmount: '100,000 DOGS',
    raiseAmount: '500,000 MINTME',
    cakeToBurn: '1,000',
    projectSiteUrl: 'https://www.mintme.com/token/DogSwap',
    currency: 'DOG-WMINT LP',
    currencyAddress: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    tokenDecimals: 18,
    releaseBlockNumber: 4086064,
  },
]

export default ifos
