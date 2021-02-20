import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills
               of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.
              The valley is 1,476 feet above sea level.Sajek valley is known as the Queen of Hills & Roof of Rangamati.'
              label='Mountains'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach.'
              label='Sea-Beach'
              path='/services'
            />
          </ul>


            <ul className='cards__items'>
                <CardItem
                    src='images/img-1.jpg'
                    text='St. Martins Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Coxs Bazar-Teknaf peninsula and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip'
                    label='Island'
                    path='/services'
                />
                <CardItem
                    src='images/img-5.jpg'
                    text='Sylhet is a city in eastern Bangladesh, on the Surma River. It’s known for its Sufi shrines, like the ornate tomb and mosque of 14th-century saint Hazrat Shah Jalal, now a major pilgrimage site near Dargah Gate. The tiny Museum of Rajas contains belongings of the local folk poet Hasan Raja.'
                    label='Tea-Garden'
                    path='/services'
                />
            </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Jatiya Sangsad Bhaban or National Parliament House, is the house of the Parliament of Bangladesh, located at Sher-e-Bangla Nagar in the Bangladeshi capital of Dhaka'
              label='National Parliament'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Nilgiri is a collection of multiple variable sizes hill area in Bandarban. Bandarban itself is a hill district in Bangladesh.'
              label='Sunset'
              path='/products'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Ahsan Manzil used to be the official residential palace and seat of the Nawab of Dhaka. The building is situated at Kumartoli along the banks of the Buriganga River in Dhaka, Bangladesh. Constructio'
              label='Ashsan Monjil'
              path='/sign-up'
            />
          </ul>

            <ul className='cards__items'>
                <CardItem
                    src='images/img-2.jpg'
                    text='Inani Beach, part of Coxs Bazar Beach is an 18 kilometre-long sea beach in Ukhia Upazila of Coxs Bazar District Bangladesh. It has a lot of coral stones which are very sharp. These coral stones look black and green and they are found in summer or rainy seasons'
                    label='Sunset'
                    path='/services'
                />
                <CardItem
                    src='images/img-14.jpg'
                    text='Kantanagar Temple, commonly known as Kantaji Temple or Kantajew Temple at Kantanagar, is a late-medieval Hindu temple in Dinajpur, Bangladesh. The Kantajew Temple is a religious edifice belonging to the 18th century.'
                    label='Temple'
                    path='/products'
                />

                <CardItem
                    src='images/jamuna.jpg'
                    text='Bangabandhu Bridge, commonly called the Jamuna Multi-purpose Bridge and also called the Poongi bridge, is a bridge opened in Bangladesh in June 1998. It connects Bhuapur on the Jamuna Rivers east bank to Sirajganj on its west bank'
                    label='Bridge'
                    path='/products'
                />

            </ul>


        </div>
      </div>
    </div>
  );
}

export default Cards;
