export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
    <main>
        <p>Auth Route Group</p>
        {children}
    </main>
   </div> 
  );
}