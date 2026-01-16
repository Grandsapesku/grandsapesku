import './globals.css';

export const metadata = {
  title: 'Úklid garáží Praha | GrandSapesku s.r.o.',
  description:
    'Profesionální úklid podzemních garáží, bytových domů a společných prostor v Praze. Spolehlivá firma, plátce DPH.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
