import React from 'react'
import Progessbar from '../../components/progessbar/Progessbar'
import OurTokenCard from '../../components/ourTokenCard/OurTokenCard'

export default function Home() {

  const progressbarData = [
    { name: "Support countries", progress: "progress-1", percentage: 75 },
    { name: "Operators", progress: "progress-2", percentage: 44 },
    { name: "Producers", progress: "progress-3", percentage: 62 },
  ]

  // token card data
  const tokenCardData=[
    {
     number:"token-card-1",
     h1:"Without blockchain fluctuations",
     p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam."
    },
    {
      number:"token-card-2",
      h1:"Protects the identity",
      p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam."
     },
     {
      number:"token-card-3",
      h1:"No transaction fees",
      p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam."
     },
     {
      number:"token-card-4",
      h1:"Instant operations",
      p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam."
     },
  ]
  return (
    <>

      {/* cryption-section */}

      <section className='cryption-section' id="section-1">
        <div className="container">
          <div className="row main-text">
            <div className="col-12">
              <h4>Cryption</h4>
              <h1>Why choosing us</h1>
            </div>
          </div>

          <div className="row text-content">
            <div className="col-xl-6 left-side px-xl-5">
              <p>Cryptoin is a block chain based marketplace, where buyers & sellers meet to carry out operations involving digital goods & assets with crypto currency transactions. The unique advantage here is an automatic matching of users, basing on artificial intelligence approach. It is a first ever artificial intelligence marketplace in the world, combining traditional and smart contract, block chain, future oriented ideas of connecting people and performing operations by analyzing users preferences. Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod.</p>
            </div>
            <div className="col-xl-6 right-side">
              {
                progressbarData.map((items, index) => {
                  return <>
                    <Progessbar progressBarData={items} key={index} />
                  </>
                })
              }
            </div>
          </div>

        </div>
      </section>

      {/*End-cryption-section */}

      {/* Our-Tokens-section */}

      <section className='Our-Tokens-section' id="section-2">
        <div className="container">

          <div className="row main-text">
            <div className="col-12">
              <h4>Our Tokens</h4>
              <h1>What is Cryption Coin?</h1>

              <h6 className='col-xl-9 mx-xl-auto'>Cryption Coin is a token, based on the Ethereum blockchain technology. It is the core asset of the new Cryption Marketplace.</h6>

            </div>
          </div>

          <div className="row token-card-main-div">
            {
              tokenCardData.map((items,index)=>{
                return <>
                <div className="col-xl-6">
                <OurTokenCard data={items} key={index} />
                </div>
                </>
              })
            }
          </div>

        </div>
      </section>

      {/*Our-Tokens-section */}

    </>
  )
}
