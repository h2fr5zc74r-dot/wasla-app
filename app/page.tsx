const services = [
  { name: 'Ride', icon: '🚕', price: 'From 12 SAR', active: true },
  { name: 'Food', icon: '🍔', price: 'Fast delivery', active: false },
  { name: 'Groceries', icon: '🛒', price: 'Today', active: false },
  { name: 'Taxi', icon: '🚖', price: '24/7', active: false },
  { name: 'Courier', icon: '📦', price: '2-5 min', active: false },
  { name: 'Home Care', icon: '🧰', price: 'Verified', active: false },
];

const drivers = [
  { name: 'Ali M.', eta: '2 min', rating: 4.9, car: 'Toyota Camry', price: '12 SAR', accent: '#2563eb' },
  { name: 'Nora A.', eta: '4 min', rating: 4.8, car: 'Hyundai Elantra', price: '15 SAR', accent: '#10b981' },
  { name: 'Samir K.', eta: '5 min', rating: 4.7, car: 'BMW 3 Series', price: '18 SAR', accent: '#f59e0b' },
];

const stats = [
  { label: 'Trips today', value: '1.4K' },
  { label: 'Avg. ETA', value: '4.8 min' },
  { label: 'Satisfaction', value: '98%' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-6 text-slate-900 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-xl font-black text-white shadow-soft">
              W
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Wasla</div>
              <div className="text-lg font-black">Service on demand</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="pill bg-white text-slate-700 ring-1 ring-slate-200">Help</button>
            <button className="pill bg-slate-900 text-white">Book now</button>
          </div>
        </header>

        <section className="mb-8 grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="soft-card rounded-[28px] p-5 md:p-7">
            <div className="mb-8 flex items-start justify-between gap-3">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
                  Live map
                </div>
                <h1 className="text-4xl font-black tracking-tight md:text-5xl">Get a trusted provider in minutes.</h1>
              </div>
              <button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-bold text-white">Profile</button>
            </div>

            <div className="mb-6 flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  key={service.name}
                  className={`rounded-2xl border px-3 py-2 text-sm font-bold transition ${
                    service.active
                      ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="mr-2">{service.icon}</span>
                  {service.name}
                </button>
              ))}
            </div>

            <div className="mb-6 rounded-[26px] border border-slate-200 bg-slate-50 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-lg">📍</div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Pickup</div>
                    <div className="font-bold">Al Zahra District</div>
                  </div>
                </div>
                <div className="text-2xl font-black text-blue-600">→</div>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-lg">📍</div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Drop-off</div>
                    <div className="font-bold">King Fahd Road</div>
                  </div>
                </div>
                <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white">Confirm</button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-4 text-white">
                  <div className="text-2xl font-black">{stat.value}</div>
                  <div className="text-xs uppercase tracking-[0.14em] text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="soft-card rounded-[28px] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Trip summary</div>
                <h2 className="text-2xl font-black">Ride to downtown</h2>
              </div>
              <div className="rounded-xl bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">On time</div>
            </div>

            <div className="mb-5 rounded-[22px] bg-gradient-to-br from-blue-600 to-indigo-700 p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-blue-100">Estimated arrival</div>
                  <div className="text-3xl font-black">4 min</div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-xl">🚕</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-3">
                <span className="text-slate-500">Base fare</span>
                <span className="font-bold">12 SAR</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-3">
                <span className="text-slate-500">Distance</span>
                <span className="font-bold">6.4 km</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-3">
                <span className="text-slate-500">ETA</span>
                <span className="font-bold">~ 4 min</span>
              </div>
            </div>

            <button className="mt-5 w-full rounded-2xl bg-black px-5 py-3 text-lg font-black text-white">Request trip</button>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.35fr_0.95fr]">
          <div className="map-shell">
            <div className="map-grid" />
            <div className="route-line" />

            <div className="absolute left-[12%] top-[20%] rounded-full bg-white px-3 py-2 text-sm font-bold shadow-lg ring-1 ring-slate-200">
              Pickup
            </div>

            <div className="absolute right-[10%] top-[28%] rounded-full bg-white px-3 py-2 text-sm font-bold shadow-lg ring-1 ring-slate-200">
              Destination
            </div>

            {drivers.map((driver, index) => (
              <div
                key={driver.name}
                className="nearby-driver"
                style={{
                  left: `${18 + index * 23}%`,
                  top: `${24 + index * 18}%`,
                }}
                title={`${driver.name} • ${driver.eta}`}
              />
            ))}

            <div className="absolute bottom-4 left-4 right-4 rounded-[24px] bg-white/90 p-4 shadow-2xl ring-1 ring-slate-200 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">🚗</div>
                  <div>
                    <div className="text-lg font-black">Ali M.</div>
                    <div className="text-sm text-slate-500">Toyota Camry • 4.9 ★</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-black">12 SAR</div>
                  <div className="text-xs uppercase tracking-[0.14em] text-slate-500">2 min away</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="soft-card rounded-[28px] p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Available now</div>
                  <h3 className="text-2xl font-black">Top drivers</h3>
                </div>
                <button className="text-sm font-bold text-blue-600">View all</button>
              </div>

              <div className="space-y-3">
                {drivers.map((driver) => (
                  <div key={driver.name} className="provider-card rounded-[24px] p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black text-white"
                          style={{ background: `linear-gradient(135deg, ${driver.accent}, #1e293b)` }}
                        >
                          {driver.name.substring(0, 1)}
                        </div>
                        <div>
                          <div className="font-black">{driver.name}</div>
                          <div className="text-sm text-slate-500">{driver.car}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-black">{driver.price}</div>
                        <div className="text-sm text-slate-500">{driver.eta}</div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                      <span>⭐ {driver.rating}</span>
                      <span className="rounded-full bg-emerald-100 px-2 py-1 font-bold text-emerald-700">Ready</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="soft-card rounded-[28px] p-5">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Activity</div>
                  <h3 className="text-2xl font-black">Today</h3>
                </div>
                <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">+12%</div>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-3">
                  <span>Completed rides</span>
                  <span className="font-bold text-slate-900">1,428</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-3">
                  <span>New bookings</span>
                  <span className="font-bold text-slate-900">324</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-3">
                  <span>Average fare</span>
                  <span className="font-bold text-slate-900">18.6 SAR</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
