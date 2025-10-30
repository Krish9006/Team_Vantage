export default function Footer() {
  return (
    <footer className="bg-[var(--card-bg)] text-[var(--secondary)] text-center py-6 border-t border-[#1e293b] mt-20">
      <p>© {new Date().getFullYear()} Team Vantage — All rights reserved.</p>
    </footer>
  );
}
