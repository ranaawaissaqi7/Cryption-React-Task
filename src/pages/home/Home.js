import React from 'react'
import Progessbar from '../../components/progessbar/Progessbar'
import OurTokenCard from '../../components/ourTokenCard/OurTokenCard'
import RoadMapMonth from '../../components/roadMapMonth/RoadMapMonth'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, Title);
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

  const roadMapMonthData= [
    { h3:"Dec 2016",
      p:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor."
    },

    { h3:"Aug 2017",
      p:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor."
    },

    { h3:"Feb 2018",
      p:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor."
    },

    { h3:"Sep 2018",
      p:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor."
    },

    { h3:"Feb 2017",
      p:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor."
    },

    { h3:"Nov 2017",
      p:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor."
    },

    { h3:"Mar 2018",
      p:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor."
    },
    { h3:"Oct 2018",
      p:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor."
    },
    { h3:"Apr 2017",
      p:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor."
    },
    { h3:"Jan 2018",
      p:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor."
    },
    { h3:"Jun 2018",
      p:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor."
    },
    { h3:"Jan 2019",
      p:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor."
    },
  ]

  const gharaphData = {
    labels: [],
    datasets: [
      {
        label: 'My First Dataset',
        data: [350, 100,50,50],
        backgroundColor: [
          'rgba(0, 195, 140,1)',
          'rgba(0, 187 , 179,1)',
          'rgba(0, 116, 113, 1)',
          'rgba(52, 61, 69, 1)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
        ],
      },
    ],
  };
  
  const gharaphOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
      },
    },
  };

  const gharaphData2 = {
    labels: [],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 100, 50,50,25],
        backgroundColor: [
          'rgba(0, 195, 140,1)',
          'rgba(0, 187 , 179,1)',
          'rgba(0, 116, 113, 1)',
          'rgba(52, 61, 69, 1)',
           'rgba(219, 210, 27, 1)'

        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
        ],
      },
    ],
  };
  
  const gharaphOptions2 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
      },
    },
  };

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
            <div className="col-xl-6 left-side px-xl-5 ">
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

      {/* gharap-section */}
      <section className='gharaph-section' id='section-3'>
        <div className="container">
          <div className="row justify-content-center text-center text-md-start">
            <div className="col-xl-4 col-lg-4 col-md-12 ">
              <p>Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidi labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h6>In order to make CRN token distribution process more efficient, the CRN price will now be linked to BTC:</h6>
            <h1>1 CRN = 0.00014 BTC</h1>
            <button>BUY TOKENS -25% OFF </button>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8">
              <h2 >Fund distribution</h2>
            <Doughnut data={gharaphData} options={gharaphOptions} />
            <ul>
              <li className='li-1'><span>350 milions</span> Token</li>
              <li className='li-2'><span>150 millions</span> Token sale</li>
              <li className='li-3'><span>10 millions</span> Hard Cap</li>
              <li className='li-4'><span>$0.4</span> - Cion price </li>
            </ul>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8 ">
              <h2 >Token distribution</h2>
            <Doughnut data={gharaphData2} options={gharaphOptions2} />
            <ul>
              <li className='li-1'><span>45%</span> Distributed to Community</li>
              <li className='li-2'><span>25%</span> Reserved Funding</li>
              <li className='li-3'><span>9%</span> Founders and Team</li>
              <li className='li-4'><span>3%s</span> Advisors</li>
              <li className='li-5'><span>2%</span> "Bounty" campaign</li>
            </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End-gharaph-section */}


      {/* road-map-section */}
      <section className='road-map-section' id='section-4'>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h4>Roadmap</h4>
              <h1>Our Strategy and Project Plan</h1>
            </div>
          </div>

          <div className="row month-row">
            {
              roadMapMonthData.map((items,index)=>{
                return<>
               <div className="col-xxl-3 col-lg-4 col-md-6  g-xl-5 g-4 ">
            
              <a href="#" className=' d-flex' > <RoadMapMonth data={items} key={index+1} /> </a>
              
               </div>
                </>
              })
            }
          </div>
        </div>
      </section>

    </>
  )
}
