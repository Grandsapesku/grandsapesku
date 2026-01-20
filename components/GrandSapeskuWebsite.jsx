export default function GrandSapeskuWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <header className="bg-white shadow">
        <h1 className="text-4xl font-bold text-center p-10">
          Profesionální úklid garáží v Praze
        </h1>
      </header>

      <main className="max-w-6xl mx-auto p-8 space-y-8">

        {/* SECTION 1 */}
        <section className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4">
            Jak probíhá spolupráce
          </h2>
          <p>
            Nezávazná prohlídka objektu, cenová nabídka na míru a profesionální úklid.
          </p>
        </section>

        {/* SECTION 2 — 3 kroky */}
        <section className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Naše kroky
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>Nezávazná prohlídka objektu</li>
            <li>Cenová nabídka na míru</li>
            <li>Profesionální úklid</li>
          </ol>
        </section>

        {/* SECTION 3 — Kontakt + formulář */}
        <section className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold text-center mb-4">Kontaktujte nás</h2>
          <form className="grid gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Jméno / Příjmení"
              className="border rounded-xl p-4"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="border rounded-xl p-4"
            />
            <textarea
              placeholder="Zpráva"
              className="border rounded-xl p-4 min-h-[140px]"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-3xl w-fit mx-auto text-lg font-semibold"
            >
              Odeslat
            </button>
          </form>
        </section>

      </main>

    </div>
  );
}
