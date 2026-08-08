import React, { useState, useEffect } from 'react';
import { PageId, Experience, Booking } from './types';
import { SAMPLE_EXPERIENCES, INITIAL_BOOKINGS } from './data/sampleData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PrototypeNav } from './components/PrototypeNav';

import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { DetailPage } from './pages/DetailPage';
import { TransparencyPage } from './pages/TransparencyPage';
import { CommunityPage } from './pages/CommunityPage';
import { B2BPage } from './pages/B2BPage';
import { BookingFlow } from './pages/BookingFlow';
import { TravelerDashboard } from './pages/TravelerDashboard';
import { ProviderDashboard } from './pages/ProviderDashboard';
import { OverviewMapPage } from './pages/OverviewMapPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedExperience, setSelectedExperience] = useState<Experience>(SAMPLE_EXPERIENCES[0]);
  const [paxCount, setPaxCount] = useState<number>(2);
  const [bookingDate, setBookingDate] = useState<string>('2026-08-25');
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  const handleSelectExperience = (exp: Experience) => {
    setSelectedExperience(exp);
  };

  const handleStartBooking = (exp: Experience, pax: number, date: string) => {
    setSelectedExperience(exp);
    setPaxCount(pax);
    setBookingDate(date);
    setCurrentPage('booking');
  };

  const handleBookingCompleted = (newBooking: Booking) => {
    setBookings([newBooking, ...bookings]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4E9] text-[#5A3A28] font-sans antialiased selection:bg-[#C25E2E] selection:text-white">
      
      {/* Persistent Top Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        savedCount={bookings.length} 
      />

      {/* Main Screen Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectExperience={handleSelectExperience} 
          />
        )}

        {currentPage === 'explore' && (
          <ExplorePage 
            onNavigate={handleNavigate} 
            onSelectExperience={handleSelectExperience} 
          />
        )}

        {currentPage === 'detail' && (
          <DetailPage 
            experience={selectedExperience} 
            onNavigate={handleNavigate} 
            onStartBooking={handleStartBooking} 
          />
        )}

        {/* STAR FEATURE PAGE */}
        {currentPage === 'transparency' && (
          <TransparencyPage />
        )}

        {currentPage === 'community' && (
          <CommunityPage 
            onNavigate={handleNavigate} 
            onSelectExperience={handleSelectExperience} 
          />
        )}

        {currentPage === 'b2b' && (
          <B2BPage 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'booking' && (
          <BookingFlow 
            experience={selectedExperience}
            paxCount={paxCount}
            bookingDate={bookingDate}
            onNavigate={handleNavigate}
            onBookingCompleted={handleBookingCompleted}
          />
        )}

        {currentPage === 'traveler-dashboard' && (
          <TravelerDashboard 
            bookings={bookings} 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'provider-dashboard' && (
          <ProviderDashboard 
            onNavigate={handleNavigate} 
          />
        )}

        {currentPage === 'overview' && (
          <OverviewMapPage 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Persistent Brand Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Bottom Prototype Toolbar (Quick Screen Switcher) */}
      <PrototypeNav 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />

    </div>
  );
}
