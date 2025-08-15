import React from 'react';

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p className="mb-5 text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>

        {/* Card 1 */}
        <div className="col-md-4 p-3">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{ width: "60%", height: "auto" }}
          />
          <p className="text-muted mt-3">
            Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 p-3">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={{ width: "60%", height: "auto" }}
          />
          <p className="text-muted mt-3">
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ width: "60%", height: "auto" }}
          />
          <p className="text-muted mt-3">
            Options trading platform that lets you create strategies and analyze data like open interest, FII/DII, and more.
          </p>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 p-3 mt-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            style={{ width: "60%", height: "auto" }}
          />
          <p className="text-muted mt-3">
            Our asset management venture creating simple and transparent index funds for your goals.
          </p>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 p-3 mt-4">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={{ width: "60%", height: "auto" }}
          />
          <p className="text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 p-3 mt-4">
          <img
            src="media/images/tijori.svg"
            alt="Investment Research"
            style={{ width: "60%", height: "auto" }}
          />
          <p className="text-muted mt-3">
            Investment research platform offering detailed insights on stocks, sectors, and supply chains.
          </p>
        </div>

        {/* Button */}
        <div className="col-12 text-center mt-4">
          <button className="btn btn-primary fs-5 px-4">Sign up now</button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
