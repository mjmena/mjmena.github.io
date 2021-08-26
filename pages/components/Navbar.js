import { useRouter } from 'next/router';
import Link from 'next/link';
import { useMemo } from 'react';
export default function Navbar(props) {
  return (
    <nav className="flex items-center sm:items-start  ">
      <div className="flex sm:flex-col justify-evenly sm:justify-start w-full flex-wrap sm:border-r-8 border-primary">
        <StylizedLink href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          About Me
        </StylizedLink>
        <StylizedLink href="/experience">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Experience
        </StylizedLink>
        <StylizedLink href="/projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          Projects
        </StylizedLink>
        <StylizedLink href="/education">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          Education
        </StylizedLink>
      </div>
    </nav>
  );
}

function StylizedLink({ children, href, ...props }) {
  var router = useRouter();
  var isSelected = useMemo(() => router.pathname === href);

  return (
    <Link href={href} scroll={false} {...props}>
      <div
        className={`flex py-2.5 px-4 font-bold underline ${
          isSelected
            ? 'bg-primary text-nuetral cursor-default no-underline'
            : 'hover:bg-secondary hover:text-nuetral '
        }`}
      >
        {children}
      </div>
    </Link>
  );
}
