export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 style={{backgroundColor:'lightgreen', padding:'1rem' }}>Product Detail Layout</h1>
      {children}
    </div>
  );
}