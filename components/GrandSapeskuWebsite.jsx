import React from 'react';

export default function GrandSapeskuWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* HEADER */}
      <header className="bg-white shadow relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1920&q=80"
            alt="Moderní rezidenční komplex – bytové domy v Praze"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 p-10 text-center">
          <h1 className="text-4xl font-bold">
            Profesionální úklid garáží v Praze
          </h1>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto p-8 space-y-16">

        {/* STEPS */}
        <section>
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

        {/* CONTACT + FORM */}
        <section className="grid gap-6 bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-center">
            Kontaktujte nás
          </h2>

          <form
            className="grid gap-4 max-w-xl mx-auto"
            action="https://formspree.io/f/mykkkewv"
            method="POST"
          >
            <input
              type="text"
              name="fullname"
              placeholder="Jméno / Příjmení"
              className="border rounded-xl p-4"
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Adresa"
              className="border rounded-xl p-4"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="border rounded-xl p-4"
              required
            />

            <textarea
              name="message"
              placeholder="Zpráva"
              className="border rounded-xl p-4 min-h-[140px]"
              required
            />

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-3xl w-fit mx-auto text-lg font-semibold"
            >
              Odeslat poptávku
            </button>
          </form>

          <div className="text-center text-gray-700 mt-6 text-lg">
            <p>📍 Praha</p>
            <p>📞 777 911 611</p>
            <p>✉️ grandsapesku@seznam.cz</p>
            <p>🏢 GrandSapesku s.r.o.</p>
          </div>
        </section>

        {/* SEO TEXT */}
        <section className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">
            Profesionální úklid garáží a společných prostor v Praze
          </h2>
          </section>

          <p className="mb-4">
            Společnost <strong>GrandSapesku s.r.o.</strong> se specializuje na
            profesionální úklid podzemních garáží, bytových domů a společných
            prostor v Praze a okolí. Spolupracujeme se SVJ, správci nemovitostí a
            developerskými projekty.
          </p>

          <p className="mb-4">
            Nabízíme strojové mytí garáží, odstranění olejových skvrn, pravidelný
            úklid chodeb, schodišť, výtahů a vstupních prostor. Jsme plátci DPH,
            máme pojištění odpovědnosti a pracujeme na základě smlouvy.
          </p>

          <p>
            Pokud hledáte spolehlivou firmu na úklid garáží v Praze, neváhejte
            nás kontaktovat. Rádi připravíme cenovou nabídku na míru.
          </p>
        </section>

      </main>

      {/* FOOTER */}
     <footer className="text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} GrandSapesku s.r.o.
      </footer>

    </div>
  );
}
      {/* HEADER */}
      <header className="bg-white shadow relative">
        <div className="absolute inset-0">
          <img
  src="https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1920&q=80"
  alt="Moderní rezidenční komplex – bytové domy v Praze"
  className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Profesionální úklid garáží a společných prostory<br />Praha a okolí
          </h1>
          <p className="text-xl text-gray-200">GrandSapesku S.R.O.</p>
            <p className="text-xl text-gray-200">IČO: 17957486</p>
          <p className="text-xl text-gray-200">DIČ: CZ17957486</p>
          <p className="text-xl text-gray-200">Adresa sídla: Za hrázi d. ev. 467, 155 31, Praha 5 - Lipence</p>

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
              ✔️ Úklid podzemních garáží
            </li>
            <li className="bg-white p-8 rounded-3xl shadow-lg">
              ✔️ Úklid společných prostory bytových domů
            </li>
            <li className="bg-white p-8 rounded-3xl shadow-lg">
              ✔️ Úklid chodeb, schodišť a vstupů
            </li>
            <li className="bg-white p-8 rounded-3xl shadow-lg">
              ✔️ Strojové mytí podlah
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
        {/* KONTAKT + FORMA */}
        <section className="grid gap-6 bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-center">
            Kontaktujte nás
          </h2>

          <form
            className="grid gap-4 max-w-xl mx-auto"
            action="https://formspree.io/f/mykkkewv"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Jméno / Přijmeni"
              className="border rounded-xl p-4"
              required
            />

             <input
              type="text"
              name="name"
              placeholder="Adresa"
              className="border rounded-xl p-4"
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="border rounded-xl p-4"
              required
            />

            <textarea
              name="message"
              placeholder="Zpráva"
              className="border rounded-xl p-4 min-h-[140px]"
              required
            />

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-3xl w-fit mx-auto text-lg font-semibold"
            >
              Odeslat poptávku
            </button>
          </form>

          <div className="text-center text-gray-700 mt-6 text-lg">
            <p>📍 Praha</p>
            <p>📞 777 911 611</p>
            <p>✉️ grandsapesku@seznam.cz</p>
            <p>🏢 GrandSapesku s.r.o.</p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      {/* SEO TEXT */}
        <section className="max-w-4xl mx-auto px-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">
            Profesionální úklid garáží a společných prostor v Praze
          </h2>

          <p className="mb-4">
            Společnost <strong>GrandSapesku s.r.o.</strong> se specializuje na
            profesionální úklid podzemních garáží, bytových domů a společných
            prostor v Praze a okolí. Spolupracujeme se SVJ, správci nemovitostí a
            developerskými projekty.
          </p>

          <p className="mb-4">
            Nabízíme strojové mytí garáží, odstranění olejových skvrn, pravidelný
            úklid chodeb, schodišť, výtahů a vstupních prostor. Jsme plátci DPH,
            máme pojištění odpovědnosti a pracujeme na základě smlouvy.
          </p>

          <p>
            Pokud hledáte spolehlivou firmu na úklid garáží v Praze, neváhejte
            nás kontaktovat. Rádi připravíme cenovou nabídku na míru.
          </p>
        </section>
      <footer className="text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} GrandSapesku s.r.o.
      </footer>
    </div>
  );
}
