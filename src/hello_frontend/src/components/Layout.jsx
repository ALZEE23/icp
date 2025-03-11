import { Outlet, Link } from "react-router-dom"; // Import Link yang benar
import Logo from "../assets/Logo.svg"; // Pastikan path logo benar

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navbar */}
      <header className="fixed top-2 z-30 w-full md:top-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
            {/* Site branding */}
            <div className="flex flex-1 items-center">
              <img src={Logo} alt="Logo" className="w-10 h-10" /> {/* Fix Logo */}
            </div>

            <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
              >
                Register
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </header>

      {/* Tempat untuk Children */}
      <main className="flex-grow container mx-auto p-6 pt-20"> {/* Tambah padding top biar navbar tidak overlap */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
