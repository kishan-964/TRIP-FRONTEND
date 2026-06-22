import React from 'react'
import useAuth from '@/hooks/useAuth'
import { jwtDecode } from 'jwt-decode'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const { token } = useAuth()
  const decodedToken = token ? jwtDecode(token) : {}
  const userName = decodedToken.name || decodedToken.username || 'Admin'

  return (
    <main className="min-h-screen bg-[#04070a] text-white px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-xl shadow-cyan-900/10">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Administrator</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Welcome back, {userName}</h1>
          <p className="mt-3 max-w-2xl text-slate-300">Manage trips, bookings, clients, and contact inquiries from a single dashboard.</p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Total trips</p>
            <p className="mt-5 text-4xl font-semibold text-white">128</p>
            <p className="mt-3 text-slate-500">Trips currently available on the platform.</p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Bookings</p>
            <p className="mt-5 text-4xl font-semibold text-white">64</p>
            <p className="mt-3 text-slate-500">Confirmed bookings waiting for review.</p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Clients</p>
            <p className="mt-5 text-4xl font-semibold text-white">3.2k</p>
            <p className="mt-3 text-slate-500">Active customers using Chalti-Trip.</p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Messages</p>
            <p className="mt-5 text-4xl font-semibold text-white">18</p>
            <p className="mt-3 text-slate-500">New contact inquiries to review.</p>
          </article>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <Link to="/trips" className="rounded-3xl border border-slate-800 bg-cyan-500/10 p-6 transition hover:bg-cyan-500/15">
            <h2 className="text-xl font-semibold text-white">Manage Trips</h2>
            <p className="mt-3 text-slate-300">Add, edit, or remove trip packages for your clients.</p>
          </Link>
          <Link to="/bookings" className="rounded-3xl border border-slate-800 bg-cyan-500/10 p-6 transition hover:bg-cyan-500/15">
            <h2 className="text-xl font-semibold text-white">Review Bookings</h2>
            <p className="mt-3 text-slate-300">Monitor and approve upcoming reservations.</p>
          </Link>
          <Link to="/contact-list" className="rounded-3xl border border-slate-800 bg-cyan-500/10 p-6 transition hover:bg-cyan-500/15">
            <h2 className="text-xl font-semibold text-white">Contact Requests</h2>
            <p className="mt-3 text-slate-300">See the latest messages from users and leads.</p>
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Dashboard
