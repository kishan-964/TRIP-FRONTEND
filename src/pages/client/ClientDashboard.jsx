import React from 'react'
import useAuth from '@/hooks/useAuth'
import { jwtDecode } from 'jwt-decode'
import { Link } from 'react-router-dom'

const ClientDashboard = () => {
  const { token } = useAuth()
  const decodedToken = token ? jwtDecode(token) : {}
  const customerName = decodedToken.name || decodedToken.username || 'Traveler'

  return (
    <main className="min-h-screen bg-[#04070a] text-white px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-xl shadow-cyan-900/10">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Client dashboard</p>
          <h1 className="mt-4 text-4xl font-semibold">Welcome, {customerName}</h1>
          <p className="mt-3 max-w-2xl text-slate-300">Track your trips, see upcoming bookings, and manage your saved travel ideas.</p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Upcoming trips</p>
            <p className="mt-5 text-4xl font-semibold text-white">3</p>
            <p className="mt-3 text-slate-500">Your next adventures are being reserved now.</p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Confirmed bookings</p>
            <p className="mt-5 text-4xl font-semibold text-white">6</p>
            <p className="mt-3 text-slate-500">Trips already booked for your schedule.</p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Saved trips</p>
            <p className="mt-5 text-4xl font-semibold text-white">8</p>
            <p className="mt-3 text-slate-500">Destinations you want to explore later.</p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Messages</p>
            <p className="mt-5 text-4xl font-semibold text-white">2</p>
            <p className="mt-3 text-slate-500">Recent updates from the Chalti-Trip team.</p>
          </article>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <Link to="/client/trips" className="rounded-3xl border border-slate-800 bg-cyan-500/10 p-6 transition hover:bg-cyan-500/15">
            <h2 className="text-xl font-semibold text-white">Browse Trips</h2>
            <p className="mt-3 text-slate-300">Explore all available journeys from Chalti-Trip.</p>
          </Link>
          <Link to="/client/bookings" className="rounded-3xl border border-slate-800 bg-cyan-500/10 p-6 transition hover:bg-cyan-500/15">
            <h2 className="text-xl font-semibold text-white">My Bookings</h2>
            <p className="mt-3 text-slate-300">Review and manage your trip reservations.</p>
          </Link>
          <Link to="/client/blog" className="rounded-3xl border border-slate-800 bg-cyan-500/10 p-6 transition hover:bg-cyan-500/15">
            <h2 className="text-xl font-semibold text-white">Travel Stories</h2>
            <p className="mt-3 text-slate-300">Read and publish travel blogs to inspire others.</p>
          </Link>
        </section>
      </div>
    </main>
  )
}

export default ClientDashboard
