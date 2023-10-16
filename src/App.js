import { TbSettings2 } from 'react-icons/tb';
import { FaKey } from 'react-icons/fa';
import { GiCube } from 'react-icons/gi';
import { RiUser3Fill } from 'react-icons/ri';
import { RiWallet3Fill } from 'react-icons/ri';
import { BiSolidOffer } from 'react-icons/bi';
import { MdLiveHelp } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { BiUpArrowAlt } from 'react-icons/bi';
import { BiDownArrowAlt } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import './App.css'

function App() {
  return (
    <>
      <nav className="navbar navbar-inverse visible-xs">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand fs-1 fw-bolder flex items-center" href="#"><TbSettings2 /><div className='img'> </div></a>
          </div>
          <div className="collapse navbar-collaps" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#"><FaKey />Dashboard</a></li>
              <li><a href="#"><GiCube />Product</a></li>
              <li><a href="#"><RiUser3Fill />Customers</a></li>
              <li><a href="#"><RiWallet3Fill />Income</a></li>
              <li><a href="#"><BiSolidOffer />Promote</a></li>
              <li><a href="#"><MdLiveHelp />Help</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid bg-slate-100">
        <div className="row content ">
          <div className="col-sm-3 sidenav hidden-xs flex flex-col items-center">
            <h2 className='mt-10 text-3xl flex gap-5'><TbSettings2 />Dashboard</h2>
            <div className='ullist'>
            <ul className="nav nav-pills mt-16">
              <li className='active flex '><a href="#section1"><FaKey />Dashboard&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward className='ml-12' /></a></li>
              <li><a href="#section2"><GiCube />Product&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward className='ml-12 flex justify-end' /></a></li>
              <li><a href="#section3"><RiUser3Fill />Customers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward className='ml-12' /></a></li>
              <li><a href="#section3"><RiWallet3Fill />Income&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward className='ml-12' /></a></li>
              <li><a href="#section3"><BiSolidOffer />Promote&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward className='ml-12' /></a></li>
              <li><a href="#section3"><MdLiveHelp />Help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward className='ml-12' /></a></li>
            </ul>
            </div>
            <div className='profile flex gap-5 items-center'>
              <div className='img'> </div>
              <div className='info'>
                <h2 className='font-semibold tracking-widest'>Saurabh</h2>
                <p className='text-base tracking-wide decoration-gray-900'>Frontend Developer</p>
              </div>
              <RiArrowDropDownLine className='ml-3 text-4xl' />
            </div>
          </div>


          <div className="col-sm-9 mt-5 ml-10">
            <div className=" searchbaar flex flex-wrap gap-3 justify-between items-center ">
              <h4 className='heading text-3xl font-bold'>Hello Saurabh <span className='text-4xl'>&#128075;</span>,</h4>
              <div className='search flex items-center '><BiSearch className='text-2xl' /><input className='bg-stone-300 h-15 w-6vh rounded-2xl text-center' type='search' placeholder='Search' />
              </div>
            </div>
            <div className="row mt-5 flex flex-wrap items-center justify-center">
              <div className="col-sm-3">
                <div className="well flex items-center rounded-2xl">
                  <div className='dollerimg'></div>
                  <div className='content ml-5'>
                    <h4 className='text-sm font-medium'>Earning</h4>
                    <h2 className='font-extrabold'>$ 198K</h2>
                    <h4 className='flex mt-3 gap-1 text-base font-semibold position'><span className='flex items-center text-green-950'><BiUpArrowAlt className='text-2xl' />37.8%</span>this month</h4>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="well flex items-center rounded-2xl">
                  <div className='dollerimg dollering1'></div>
                  <div className='content ml-5'>
                    <h4 className='text-sm font-medium'>Order</h4>
                    <h2 className='font-extrabold'>$ 2.4K</h2>
                    <h4 className='flex mt-3 gap-1 text-base font-semibold position'><span className='flex items-center text-green-950'><BiDownArrowAlt className='text-2xl' />2%</span>this month</h4>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="well flex items-center rounded-2xl">
                  <div className='dollerimg dollering2'></div>
                  <div className='content ml-5'>
                    <h4 className='text-sm font-medium'>Balance</h4>
                    <h2 className='font-extrabold'>$ 2.4K</h2>
                    <h4 className='flex mt-3 gap-1 text-base font-semibold position'><span className='flex items-center text-green-950'><BiDownArrowAlt className='text-2xl' />2%</span>this month</h4>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="well flex items-center rounded-2xl">
                  <div className='dollerimg dollering3'></div>
                  <div className='content ml-5'>
                    <h4 className='text-sm font-medium'>Total Sales</h4>
                    <h2 className='font-extrabold'>$ 89K</h2>
                    <h4 className='flex mt-3 gap-1 text-base font-semibold position'><span className='flex items-center text-green-950'><BiUpArrowAlt className='text-2xl' />11%</span>this week</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-sm-8">
                <div className="well">
                  <div className='flex flex-wrap justify-between'>
                    <div className=''>
                      <h1 className='font-extrabold'>Overview</h1>
                      <p className='mt-5 text-base'>Monthly Earning</p>
                    </div>
                    <select className='select rounded-sm h-10' name="cars" id="cars">
                      <option value="volvo">Quarterly</option>
                    </select>
                  </div>

                  <div className='flex flex-wrap  justify-between'>
                    <div className='flex flex-col flex-wrap items-center'>
                      <div className='chart1 bg-blue-200 rounded-3xl border-current'></div>
                      <div>Jan</div>
                    </div>

                    <div className='flex flex-col flex-wrap items-center'>
                      <div className='chart2 bg-blue-200 rounded-3xl border-current'></div>
                      <div>Fev</div>
                    </div>

                    <div className='flex flex-col flex-wrap items-center'>
                      <div className='chart3 bg-blue-200 rounded-3xl border-current'></div>
                      <div>March</div>
                    </div>

                    <div className='flex flex-col flex-wrap items-center'>
                      <div className='chart4 bg-blue-200 rounded-3xl border-current'></div>
                      <div>April</div>
                    </div>

                    <div className='flex flex-col flex-wrap items-center'>
                      <div className='chart5 bg-blue-200 rounded-3xl border-current'></div>
                      <div>May</div>
                    </div>

                    <div className='flex flex-col flex-wrap items-center'>
                      <div className='chart6 bg-blue-200 rounded-3xl border-current'></div>
                      <div>Jun</div>
                    </div>

                    <div className='flex flex-col flex-wrap items-center'>
                      <div className='chart7 bg-blue-200 rounded-3xl border-current'></div>
                      <div>July</div>
                    </div>

                    <div className='flex flex-col flex-wrap items-center'>
                      <div className='chart8 bg-blue-200 rounded-3xl border-current'></div>
                      <div>Aug</div>
                    </div>

                    <div className='flex flex-col flex-wrap items-center'>
                      <div className='chart9 bg-blue-200 rounded-3xl border-current'></div>
                      <div>Sep</div>
                    </div>

                    <div className='flex flex-col flex-wrap items-center'>
                      <div className='chart10 bg-blue-200 rounded-3xl border-current'></div>
                      <div>Oct</div>
                    </div>

                    <div className='flex flex-col flex-wrap items-center'>
                      <div className='chart11 bg-blue-200 rounded-3xl border-current'></div>
                      <div>Nov</div>
                    </div>

                    <div className='flex flex-col flex-wrap items-center'>
                      <div className='chart12 bg-blue-200 rounded-3xl border-current'></div>
                      <div>Dec</div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-sm-4 ">
                <div className="well flex flex-col items-center gap-5">
                  <div className='content ml-5'>
                    <h2 className='font-extrabold'>Customers</h2>
                    <h4 className='text-sm font-semibold mt-2'>Customers that by Products</h4>
                  </div>
                  <div className='customers '></div>
                  <h1 className='font-sans font-bold'>65%</h1>
                  <p className='flex flex-wrap text-center'>Total New Customers</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="well">
                  <div className='flex flex-wrap justify-between gap-3'>
                    <h1 className='font-extrabold'>Product Sell</h1>
                    <div className='search flex items-center gap-4 flex-wrap'><BiSearch className='text-2xl' /><input className='bg-stone-300 h-15 w-6vh rounded-2xl text-center' type='search' placeholder='Search' />
                      <select className='select rounded-sm h-10' name="cars" id="cars">
                        <option value="volvo">Last 30 days</option>
                      </select>
                    </div>
                  </div>

                  <div className='uphori flex justify-between mt-4'>
                    <p>Product Name</p>
                    <div className='flex gap-x-56 flex-wrap'>
                      <p>Stock</p>
                      <p>Price</p>
                      <p>Total Sales</p>
                    </div>
                  </div>
                  <div className='blanck '></div>

                  <div className='products mt-2 flex justify-between'>
                    <div className='productinfo flex items-center gap-2'>
                      <div className='productImage'></div>
                      <div className=''>
                        <h1 className='font-sans font-extrabold'>Abstract 3D</h1>
                        <p className='font-sans text-base font-medium'>Art 3D illustrations-health and obesity.Blender 3D software</p>
                      </div>
                    </div>
                    <div className='productinformation flex gap-x-60 flex-wrap mr-5'>
                      <p className='font-sans'>32 in stock</p>
                      <h1 className='font-sans font-bold'>$ 45.99</h1>
                      <p>20</p>
                    </div>
                  </div>

                  <div className='products mt-2 flex justify-between'>
                    <div className='productinfo flex items-center gap-2'>
                      <div className='productImage1'></div>
                      <div className=''>
                        <h1 className='font-sans font-extrabold'>Sarphens illustrations</h1>
                        <p className='font-sans text-base font-medium'>Lorem ipsum dolor sit amet, consectature adipiscsing elit.</p>
                      </div>
                    </div>
                    <div className='productinformation flex gap-x-60 flex-wrap mr-5'>
                      <p className='font-sans'>32 in stock</p>
                      <h1 className='font-sans font-bold'>$ 45.99</h1>
                      <p>20</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;