import React, { useState } from "react";
import "./BundleAd.scss";

export default function BundleAd() {
  return (
    <>
      <section className="bundle-ad">
        <div className="bundle-ad__logo">
          <img src="/hulu_disney-logo.png" alt="hulu disney bundle" />
        </div>
        <div className="bundle-ad__descriptions">
          <p>
            Access your favorite stories, Originals, and more from Disney+ and
            Hulu, with plans starting at $9.99/month. <br />
            <span>Terms apply*</span>
          </p>
          <a href="#" className="bundle-ad__button">
            Get Them Both
          </a>
        </div>
      </section>
      <section className="terms">
        <p>
          *U.S. residents, 18+ only. Access content from each service
          separately. Location data required to watch certain content. Offer
          valid for eligible subscribers only. Subject to{" "}
          <a href="#">Disney+ and ESPN+ Subscriber Agreement</a>. For detailed
          information on billing and cancelation, please visit the{" "}
          <a href="#">Disney+ Help Center</a>.
        </p>
      </section>
    </>
  );
}
