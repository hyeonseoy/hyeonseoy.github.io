import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Socials() {
    return (
      <div class="social-icons">
        {/* Email */}
        <a href="mailto:hyeonseoy000@gmail.com" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-10 5L2 7" />
          </svg>
        </a>

        {/* GitHub */}
        <a href="https://github.com/hyeonseoy" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.3-1.68-1.3-1.68-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.2 1.8 1.2 1.04 1.78 2.74 1.26 3.4.96.1-.76.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.5.12-3.13 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.63.24 2.83.12 3.13.75.8 1.2 1.82 1.2 3.08 0 4.43-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
          </svg>
        </a>
      </div>
    )
  }

  Socials.css = `
    .social-icons {
      display: flex;
      gap: 0.7rem;
      margin-top: 0.8rem;
    }

    .social-icons a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      min-width: 38px;
      min-height: 38px;
      border-radius: 10px;
      background: var(--lightgray);
      color: var(--secondary);
      text-decoration: none;
      transition: all 0.2s ease;
      padding: 0;
    }

    .social-icons a:hover {
      transform: translateY(-2px);
      background: var(--gray);
    }

    .social-icons a svg {
      width: 18px !important;
      height: 18px !important;
      min-width: 18px;
      min-height: 18px;
      display: block;
      flex-shrink: 0;
    }
  `

  return Socials
}) satisfies QuartzComponentConstructor
