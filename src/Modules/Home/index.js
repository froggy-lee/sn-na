"use client";
import React, { useState, useEffect } from "react";
import "./styles.scss";
import LoadingPage from "@/components/Loading/LoadingPage";

function HomePage() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setToggle(false);
    }, 5000);
  });

  return (
    <>
      {toggle ? (
        <LoadingPage />
      ) : (
        <div>
          <div className="imgLoader"></div>

          <div className="container">
            <h1 className="title">
              Turning pages
              <br />
              with css
            </h1>

            <div className="book">
              <div className="gap"></div>
              <div className="pages">
                <div className="page"></div>
                <div className="page"></div>
                <div className="page"></div>
                <div className="page"></div>
                <div className="page"></div>
                <div className="page"></div>
              </div>
              <div className="flips">
                <div className="flip flip1">
                  <div className="flip flip2">
                    <div className="flip flip3">
                      <div className="flip flip4">
                        <div className="flip flip5">
                          <div className="flip flip6">
                            <div className="flip flip7"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="table center">
              <div className="monitor-wrapper center">
                <div className="monitor center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
