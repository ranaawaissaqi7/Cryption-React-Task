import React from 'react'
import Progessbar from '../../components/progessbar/Progessbar'

export default function Home() {

  const progressbarData=[
    {name:"Support countries",progress:"progress-1",percentage:75},
    {name:"Operators",progress:"progress-2",percentage:44},
    {name:"Producers",progress:"progress-3",percentage:62},
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
              progressbarData.map((items,index)=>{
                return <>
                <Progessbar progressBarData={items} key={index}  />
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
          </div>
        </div>


      </div>
    </section>

    {/*Our-Tokens-section */}
    

    </>
  )
}
