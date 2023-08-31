import { html } from 'swtl';

export function Spinner() {
  return html`
    <div class="spinner">
      <svg role="status" aria-live="polite" aria-label="loading" part="spinner" viewBox="25 25 50 50">
        <circle part="circle" cx="50" cy="50" r="20" />
      </svg>
    </div>
  `;
}

export const spinnerStyles = () => html`
  <style>
    .spinner {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .spinner svg {
      animation: rotate 2000ms linear infinite;
      transform-origin: center center;
      margin: auto;
      stroke: #0076ff;
      width: 50px;
      height: 50px;
    }

    .spinner circle {
      stroke-dasharray: 85, 200;
      stroke-dashoffset: 0px;
      animation: dash 2000ms ease-in-out infinite;
      stroke-linecap: round;
      stroke-width: 4px;
      stroke-miterlimit: 10;
      fill: none;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0px;
      }
      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
      }
      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
      }
    }

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      svg {
        animation-duration: 1500ms;
      }
      circle {
        stroke-linecap: square;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      svg {
        animation-duration: 20000ms;
      }
      circle {
        animation: dash 20000ms ease-in-out infinite;
      }
    }
  </style>
`;