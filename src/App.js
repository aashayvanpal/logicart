import data from './components/DoughnutChart/index'
import { useState } from 'react';
import './App.css';
import DisplayCard from './components/DisplayCard'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import image1 from './components/images/image1.jpg'
import image2 from './components/images/image2.jpg'
import actionBtn from './components/images/image 9.jpg'
import closeBtn from './components/images/image 10.png'
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [isModalOpen, setisModalOpen] = useState(false)

  const openDetailsModal = () => {
    setisModalOpen(true)
  }
  const closeDetailsModal = () => {
    setisModalOpen(false)
  }

  const details = [{
    heading: "Consigner",
    name: "RAW PRESSURY PVT LIMITED",
    address: "Y-36,OKHLA INDUSTRIES PHASE-II",
    src: image1,
  },
  {
    heading: "Consignee",
    name: "Balarema Agencies-Kerala Distributor",
    address: "Vallikkad,Muttungal,Vadakara nIV-436",
    src: image1,
  },
  {
    heading: "Shipment Booked Date",
    name: "",
    address: "2023-09-01T14:55:05.000Z",
    src: image2,
  }
  ]
  return (
    <div>
      Logicart
      {isModalOpen ? <div style={{ position: 'absolute', border: '2px solid black', width: "100%", height: "100%", zIndex: "1", background: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'end', marginRight: '20px' }}>
          <img src={closeBtn} alt='not found image' height={'30px'} width={'30px'} onClick={closeDetailsModal} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', justifyContent: 'center', alignItems: 'center' }}>
          <div>stepper</div>
          <div style={{ backgroundColor: '#65B6E0', padding: '10px 40px', width: '40%', textAlign: 'center', borderRadius: '8px', color: 'white', fontWeight: 'bold' }}>Docket No -</div>
          <div style={{ display: 'flex', gap: '40px', width: '100%', justifyContent: 'space-evenly' }}>
            {details.map(detail => <DisplayCard heading={detail.heading} name={detail.name} address={detail.address} src={detail.src} />)}

            {/* <DisplayCard heading="Consigner" name="name1" address="address1" src={image1} />
            <DisplayCard heading="Consignee" name="name1" address="address1" src={image1} />
            <DisplayCard heading="Shipment Booked Date" name="" address="address1" src={image2} /> */}


          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <table style={{ width: '50%', textAlign: 'center' }}>
              <thead>
                <tr style={{ fontWeight: 'bold' }}>
                  <td>Date/Time</td>
                  <td>Location</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Time</td>
                  <td>BLR</td>
                  <td>Delivered Successfully</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>BLR</td>
                  <td>Branch Out Carting</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>BLR</td>
                  <td>Picked Up</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>BLR</td>
                  <td>Consignment Booked</td>
                </tr>

              </tbody>
            </table>
          </div>

          <>
            <button style={{ backgroundColor: '#1C8FD1', padding: '10px 20px', borderRadius: '8px', color: 'white', fontWeight: 'bold' }}>Download POD</button>
          </>
        </div>



      </div> : null}


      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', gap: '30px' }}>
            <div><Doughnut data={data} /></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: "20px", justifyItems: 'center', justifyContent: 'center' }}>
              {/* Legend here */}
              <div style={{ display: 'flex', gap: '10px', fontWeight: 'bold', }}><div style={{ height: '30px', width: '30px', backgroundColor: '#757C7C' }}></div>Consignment booked</div>
              <div style={{ display: 'flex', gap: '10px', fontWeight: 'bold', }}><div style={{ height: '30px', width: '30px', backgroundColor: '#C38181' }}></div>In Transit</div>
              <div style={{ display: 'flex', gap: '10px', fontWeight: 'bold', }}><div style={{ height: '30px', width: '30px', backgroundColor: '#5589C7' }}></div>Out for delivery</div>
              <div style={{ display: 'flex', gap: '10px', fontWeight: 'bold', }}><div style={{ height: '30px', width: '30px', backgroundColor: '#87A65F' }}></div>Delivered Successfully</div>

            </div>

          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>

          <table style={{ width: "80%", textAlign: 'center' }}>
            <thead >
              <tr style={{ backgroundColor: '#A9DCF6' }}>
                <td style={{ padding: '10px' }}>Docket No</td>
                <td style={{ padding: '10px' }}>From</td>
                <td style={{ padding: '10px' }}>To</td>
                <td style={{ padding: '10px' }}>Status</td>
                <td style={{ padding: '10px' }}>Actions</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>L123456789</td>
                <td>BLR</td>
                <td>KER</td>
                <td>Consignment Booked</td>
                <td>
                  <img src={actionBtn} alt='not found image' height={'20px'} width={'20px'} onClick={openDetailsModal}></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
