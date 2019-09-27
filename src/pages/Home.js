import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title='Vacation Rooms'
          subtitle='Amazing rooms at amazing prices'
        >
          <Link to='/rooms' className='btn-primary'>
            view rooms
          </Link>
        </Banner>
      </Hero>
      {/* <Services></Services> */}
      <FeaturedRooms></FeaturedRooms>
    </>
  );
}