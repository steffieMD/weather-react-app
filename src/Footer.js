import React from "react";

export default function Footer() {
  return (
    <footer className="">
      <p>
        This project was coded by
        <a
          href="https://github.com/steffieMD"
          target="_blank"
          className="ps-1 pe-1"
          rel="noreferrer"
        >
          <a href="https://github.com/steffieMD" rel="noreferrer">
            Steff Metieh
          </a>
        </a>
        and is
        <a
          href="https://github.com/steffieMD/my-weather-app.git"
          target="_blank"
          className="ps-1 pe-1"
          rel="noreferrer"
        >
          on{" "}
          <a
            href="https://github.com/steffieMD/react-weather-app"
            rel="noreferrer"
          >
            GitHub
          </a>
        </a>
        and
        <a
          href="https://sprightly-raindrop-3b6126.netlify.app"
          target="_blank"
          className="ps-1 pe-1"
          rel="noreferrer"
        >
          hosted on{" "}
          <a
            href="https://sparkly-sopapillas-ffd2f6.netlify.app/"
            rel="noreferrer"
          >
            Netlify
          </a>
        </a>
      </p>
    </footer>
  );
}
