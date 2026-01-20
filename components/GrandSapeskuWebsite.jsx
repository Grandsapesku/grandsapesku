"use client";
import React, { useState } from "react";

export default function GrandSapeskuWebsite() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "1️⃣ Jak často je potřeba strojové mytí garáží?",
      answer: "Doporučujeme pravidelné mytí 1–2× ročně, v závislosti na zatížení garáže a množství nečistot. Pravidelná údržba prodlužuje životnost podlah a udržuje čistotu a bezpečnost."
    },
    {
      question: "2️⃣ Spolupracujete i s neplátci DPH?",
      answer: "Ano, nabízíme speciální podmínky pro neplátce DPH. Přizpůsobíme cenovou nabídku vašim potřebám, abyste získali stejnou kvalitu úklidu."
    },
    {
      question: "3️⃣ Jak dlouho trvá úklid garáže?",
      answer: "Doba úklidu závisí na velikosti garáže a rozsahu práce. Na místě provedeme nezávaznou prohlídku a připravíme přesný časový plán."
    },
    {
      question: "4️⃣ Používáte ekologické a bezpečné čisticí prostředky?",
      answer: "Ano, používáme moderní stroje a ekologické čisticí prostředky, které jsou šetrné k podlaze i životnímu prostředí."
    },
    {
      question: "5️⃣ Nabízíte úklid pro SVJ a developerské projekty?",
      answer: "Ano, spolupracujeme se SVJ, správci nemovitostí i developerskými projekty a přizpůsobujeme služby konkrétním požadavkům."
    },
    {
      question: "6️⃣ Jak si objednat úklid?",
      answer: "Stačí vyplnit náš kontaktní formulář, zavolat nebo napsat e-mail a my připravíme cenovou nabídku na míru."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
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

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="tel:777911611"
              className="inline-flex w-fit bg-red-600 hover:bg-red-700 transition text-white px-10 py-4 rounded-full text-xl font-semibold"
            >
              Zavolat 777 911 611
            </a>

            <a
              href="#kontakt"
              className="inline-flex w-fit bg-white hover:bg-gray-100 transition text-red-600 px-10 py-4 rounded-full text-xl font-semibold border-2 border-red-600"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-20 grid gap-20">
        {/* SLUŽBY */}
        <section className="grid gap-6">
          <h2 className="text-3xl font-bold text-center">Naše služby</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="bg-white p-8 rounded-3xl shadow-lg">✔️ Úklid podzemních garáží</li>
            <li className="bg-white p-8 rounded-3xl shadow-lg">✔️ Úklid společných prostory bytových domů</li>
            <li className="bg-white p-8 rounded-3xl shadow-lg">✔️ Úklid chodeb, schodišť a vstupů</li>
            <li className="bg-white p-8 rounded-3xl shadow-lg">✔️ Strojové mytí podlah</li>
          </ul>
        </section>
        {/* PROC SPOLUPRACOVAT */}
        <section className="grid gap-6">
          <h2 className="text-3xl font-bold text-center">Proč spolupracovat s námi</h2>
          <ul className="grid md:grid-cols-4 gap-6">
            <li className="bg-white p-6 rounded-3xl shadow-lg text-center">✔️ Plátce DPH</li>
            <li className="bg-white p-6 rounded-3xl shadow-lg text-center">✔️ Pojištění odpovědnosti</li>
            <li className="bg-white p-6 rounded-3xl shadow-lg text-center">✔️ Smlouva a pravidelná fakturace</li>
            <li className="bg-white p-6 rounded-3xl shadow-lg text-center">✔️ Kvalita a spolehlivost</li>
          </ul>
        </section>

        {/* JAK SPOLUPRACE PROBIHA */}
        <section className="grid gap-6">
          <h2 className="text-3xl font-bold text-center">Jak spolupráce probíhá</h2>
          <ol className="grid md:grid-cols-3 gap-6">
            <li className="bg-white p-8 rounded-3xl shadow-lg text-center">1️⃣ Nezávazná prohlídka objektu</li>
            <li className="bg-white p-8 rounded-3xl shadow-lg text-center">2️⃣ Cenová nabídka na míru</li>
            <li className="bg-white p-8 rounded-3xl shadow-lg text-center">3️⃣ Profesionální úklid</li>
          </ol>
        </section>

        {/* FAQ АКОРДЕОН */}
        <section className="max-w-4xl mx-auto px-6 py-12 bg-gray-50 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Často kladené otázky (FAQ)</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 text-gray-700 border-t bg-gray-50">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* KONTAKT + FORMA */}
        <section id="kontakt" className="grid gap-6 bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-center">Kontaktujte nás</h2>

          <form className="grid gap-4 max-w-xl mx-auto" action="https://formspree.io/f/mykkkewv" method="POST">
            <input type="text" name="name" placeholder="Jméno / Přijmeni" className="border rounded-xl p-4" required />
            <input type="text" name="address" placeholder="Adresa" className="border rounded-xl p-4" required />
            <input type="email" name="email" placeholder="E-mail" className="border rounded-xl p-4" required />
            <textarea name="message" placeholder="Zpráva" className="border rounded-xl p-4 min-h-[140px]" required />
            <button type="submit" className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-3xl w-fit mx-auto text-lg font-semibold">
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

        {/* SEKCE PRO NEPLÁTCE DPH + VÝHODY STROJOVÉHO MYTÍ */}
        <section className="max-w-4xl mx-auto px-6 py-12 text-gray-700 text-lg leading-relaxed space-y-6 bg-gray-50 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Speciální podmínky pro neplátce DPH</h2>

          <p>
            I pokud nejste plátcem DPH, rádi Vám nabídneme profesionální úklid garáží a společných prostor
            za <strong>speciálních podmínek</strong>. Přizpůsobíme cenovou nabídku Vašim potřebám, abyste
            získali stejnou kvalitu úklidu, aniž byste museli řešit DPH.
          </p>
          <h3 className="text-xl font-semibold mt-6">Proč je strojové mytí garáží a podlah důležité</h3>
          <p>
            Podzemní garáže a parkovací plochy se rychle znečišťují – olejové skvrny, prach, písek a další nečistoty
            mohou poškodit povrch podlah a způsobit nepříjemné zápachy. Naše profesionální strojové mytí:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Odstraňuje olejové a tukové skvrny efektivně a bezpečně</li>
            <li>Zachovává a prodlužuje životnost betonových a dlažebních povrchů</li>
            <li>Zlepšuje bezpečnost a hygienu pro obyvatele a návštěvníky</li>
            <li>Zajišťuje čistý a profesionální vzhled vašeho objektu</li>
            <li>Strojové mytí podlah je rychlejší, efektivnější a šetrnější než ruční čištění</li>
            <li>Optimalizuje údržbu garáží a snižuje dlouhodobé náklady na opravy a úklid</li>
          </ul>

          <p>
            Díky našim zkušenostem, moderním strojům a profesionálnímu přístupu garantujeme rychlý a spolehlivý úklid,
            který šetří Váš čas, chrání podlahy a zajišťuje dlouhodobou čistotu a bezpečnost Vaší nemovitosti.
          </p>
        </section>

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

        {/* ORIENTAČNÍ CENÍK */}
        <section className="max-w-4xl mx-auto px-6 py-12 bg-gray-50 rounded-3xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-center mb-6">Orientační ceník našich služeb</h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
            <li className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold mb-2">Úklid podzemních garáží</h3>
              <p>od <strong>90 Kč / m²</strong></p>
              <p className="text-sm text-gray-500">Profesionální mechanické mytí a úklid ploch</p>
            </li>
            <li className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold mb-2">Úklid společných prostor bytových domů</h3>
              <p>od <strong>80 Kč / m²</strong></p>
              <p className="text-sm text-gray-500">Chodby, vstupy a společné prostory</p>
            </li>
            <li className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold mb-2">Úklid chodeb a schodišť</h3>
              <p>od <strong>60 Kč / m²</strong></p>
              <p className="text-sm text-gray-500">Efektivní úklid s použitím moderních technologií</p>
            </li>
            <li className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold mb-2">Strojové mytí podlah</h3>
              <p>od <strong>100 Kč / m²</strong></p>
              <p className="text-sm text-gray-500">Hloubkové strojové čištění pro dlouhodobou životnost</p>
            </li>
          </ul>

          <p className="text-center text-gray-600 mt-4">
            Ceny jsou orientační a mohou se lišit podle rozsahu práce, typu povrchu a úrovně znečištění.
            Přesná cena bude stanovena po bezplatné prohlídce objektu nebo na základě Vaší poptávky.
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
