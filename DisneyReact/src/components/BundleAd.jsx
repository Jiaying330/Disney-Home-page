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
      <section className="card-ad">
        <div className="card-ad__logo">
          <img src="/visa.png" alt="visa card" />
        </div>
        <div className="card-ad__descriptions">
          <h2>Your Disney dream is in the card</h2>
          <h3>Special Vacation Financing</h3>
          <p>
            Enjoy 0% promotional APR for 6 months on selected Disney vacation
            packages. terms apply.
          </p>
          <h3>
            Earn a <strong>$300</strong> statement credit.
          </h3>
          <p>New Disten® Premier Visa® Cardmembers only.</p>
          <a href="#">Learn More</a>
          <span>
            Restrictions apply.© Disney and its related entities. <br />
            Member FDIC
          </span>
        </div>
      </section>
    </>
  );
}
