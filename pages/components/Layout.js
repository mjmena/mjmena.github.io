import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen min-w-screen bg-primary">
      <div className="flex-col text-primary max-w-screen-xl min-h-screen m-auto bg-nuetral">
        <header className="max-w-screen-md m-auto">
          <div className="text-2xl sm:text-6xl text-center">Martin J. Mena</div>
          <div className="text-lg sm:text-2xl py-5 text-center">
            Software Developer
          </div>
        </header>
        <main className="flex-col px-5 sm:flex sm:flex-row text-secondary">
          <Navbar />
          <article className="sm:px-10 py-10 sm:py-0">{children}</article>
        </main>
        <footer className="flex-1 p-10 text-2xl font-bold justify-center align-center font-dots">
          Socials{' '}
          <a href="https://www.linkedin.com/in/mjmena/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>{' '}
          </a>
        </footer>
      </div>
    </div>
  );
}

function SpreadText(props) {
  return props.children
    .split('')
    .map((letter, index) => <div key={index}>{letter}</div>);
}
