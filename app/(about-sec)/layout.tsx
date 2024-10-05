import Nav from "../components/nav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-sky-400">
      <div>
        <Nav/>
        {children}
      </div>
      </body>
  );
}