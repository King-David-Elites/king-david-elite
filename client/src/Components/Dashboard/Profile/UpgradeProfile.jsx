import { useEffect, useState } from "react";
import { Upgrade } from "./UpgradeProfile.Style";
import { ChevronLeft } from "heroicons-react";
import { useNavigate } from "react-router-dom";

const UpgradeProfile = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <Upgrade>
        <div className="bck">
          <div className="cont" onClick={() => navigate(-1)}>
            <ChevronLeft size="25px" />
          </div>
        </div>
        <div className="head">
          <p className="h1">Pricing Plans</p>
          <p className="h2">
            Get acess to unlimited listings and other features as you showcase
            your exclusive listings to our high-esteemed users.
          </p>
        </div>
        <div className="typeBtn">
          <div
            className={active === 0 ? "selectBtn1" : "selectBtn2"}
            onClick={() => {
              setActive(0);
            }}
          >
            Monthly billing
          </div>
          <div
            className={active === 1 ? "selectBtn1" : "selectBtn2"}
            onClick={() => {
              setActive(1);
            }}
          >
            Yearly billing
          </div>
        </div>

        <div className="packages">
          {active === 0 && (
            <>
              <div className="package">
                <div className="top">Individual Package</div>
                <div className="descr">
                  Showcase your listings to the most elite community of magnates
                  around the world
                </div>
                <div className="pricing">
                  <p>
                    <span>$50</span>/mo
                  </p>
                </div>
                <div className="btn"> Get Started </div>
              </div>
              <div className="package">
                <div className="top">Corporate Package</div>
                <div className="descr">
                  Increase your commission pipeline by getting our team of
                  experts to make sales on your behalf
                </div>
                <div className="pricing">
                  <p>
                    <span>$200</span>/mo
                  </p>
                </div>
                <div className="btn"> Get Started </div>
              </div>
            </>
          )}

          {active === 1 && (
            <>
              <div className="package">
                <div className="top">Individual Package</div>
                <div className="descr">
                  Showcase your listings to the most elite community of magnates
                  around the world
                </div>
                <div className="pricing">
                  <p>
                    <span>$500</span>/yr
                  </p>
                </div>
                <div className="btn"> Get Started </div>
              </div>
              <div className="package">
                <div className="top">Corporate Package</div>
                <div className="descr">
                  Increase your commission pipeline by getting our team of
                  experts to make sales on your behalf
                </div>
                <div className="pricing">
                  <p>
                    <span>$2000</span>/yr
                  </p>
                </div>
                <div className="btn"> Get Started </div>
              </div>
            </>
          )}
        </div>
        <div className="base">
          your account will not be charged until you’re verified.{" "}
          <span>T&Cs apply.</span>
        </div>
      </Upgrade>
    </>
  );
};

export default UpgradeProfile;
