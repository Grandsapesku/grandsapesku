import React from 'react';

export default function GrandSapeskuWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="bg-white shadow relative">
        <div className="absolute inset-0">
          <img
            src="/images/rezidencni-komplex.jpg"
            alt="Rezidenční domy Praha"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Profesionální úklid garáží<br />Praha a okolí
          </h1>
          <p className="text-xl text-gray-200">GrandSapesku s.r.o.</p>

          <a
            href="tel:777911611"
            className="mt-6 inline-flex w-fit bg-red-600 hover:bg-red-700 transition text-white px-10 py-4 rounded-full text-xl font-semibold"
          >
            Zavolat 777 911 611
          </a>
        </div>
      </header>

      {/* SLUŽBY */}
      <main className="max-w-6xl mx-auto px-6 py-20 grid gap-20">
        <section className="grid gap-6">
          <h2 className="text-3xl font-bold text-center">Naše služby</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="bg-white p-8 rounded-3xl shadow-lg">
              🅿️ Profesionální úklid podzemních garáží
            </li>
            <li className="bg-white p-8 rounded-3xl shadow-lg">
              🏢 Úklid společných prostor bytových domů
            </li>
            <li className="bg-white p-8 rounded-3xl shadow-lg">
              🚪 Úklid chodeb, schodišť a vstupů
            </li>
            <li className="bg-white p-8 rounded-3xl shadow-lg">
              🧼 Strojové mytí podlah
            </li>
          </ul>
        </section>
{/* PROC SPOLUPRACOVAT */}
        <section className="grid gap-6">
          <h2 className="text-3xl font-bold text-center">
            Proč spolupracovat s námi
          </h2>

          <ul className="grid md:grid-cols-4 gap-6">
            <li className="bg-white p-6 rounded-3xl shadow-lg text-center">
              ✔️ Plátce DPH
            </li>
            <li className="bg-white p-6 rounded-3xl shadow-lg text-center">
              ✔️ Pojištění odpovědnosti
            </li>
            <li className="bg-white p-6 rounded-3xl shadow-lg text-center">
              ✔️ Smlouva a pravidelná fakturace
            </li>
            <li className="bg-white p-6 rounded-3xl shadow-lg text-center">
              ✔️ Kvalita a spolehlivost
            </li>
          </ul>
        </section>
        {/* JAK SPOLUPRACE PROBIHA */}
        <section className="grid gap-6">
          <h2 className="text-3xl font-bold text-center">
            Jak spolupráce probíhá
          </h2>

          <ol className="grid md:grid-cols-3 gap-6">
            <li className="bg-white p-8 rounded-3xl shadow-lg text-center">
              1️⃣ Nezávazná prohlídka objektu
            </li>
            <li className="bg-white p-8 rounded-3xl shadow-lg text-center">
              2️⃣ Cenová nabídka na míru
            </li>
            <li className="bg-white p-8 rounded-3xl shadow-lg text-center">
              3️⃣ Profesionální úklid
            </li>
          </ol>
        </section>
        {/* KONTAKT */}
        <section className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
          <p className="text-lg">📞 777 911 611</p>
          <p className="text-lg">✉️ grandsapesku@seznam.cz</p>
          <p className="text-lg">📍 Praha</p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} GrandSapesku s.r.o.
      </footer>
    </div>
  );
}
