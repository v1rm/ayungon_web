import React from "react";
import mayor from "../assets/dennis.png";
import viceMayor from "../assets/nelda.png";
import logo from "../assets/logo.png";
import joseph from "../assets/joseph.png";
import leeDy from "../assets/lee.png";
import roger from "../assets/roger.png";
import romulo from "../assets/romulo.png";
import densio from "../assets/densio.png";
import christain from "../assets/christian.png";
import keith from "../assets/keith.png";
import esay from "../assets/esay.png";
import chona from "../assets/chona.png";
import jaja from "../assets/jaja.png";

const Officials = () => {
  return (
    <div className=" flex w-full bg-green-600 flex-col">
      <div className=" flex flex-col items-center justify-center w-full pt-20 h-full">
        <div className="flex bg-slate-200  flex-col w-3/4  rounded-lg">
          <div className="p-5 flex pl-10">
            <div className="flex flex-row justify-center items-center">
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div className="flex flex-col pl-5 ">
                {" "}
                <h1 className="font-sans text-2xl font-bold">
                  AYUNGON NEGROS ORIENTAL
                </h1>
                <h2 className="font-sans text-lg font-bold">
                  REPUBLIC OF THE PHILIPPINES
                </h2>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className=" flex flex-col p-1 h-96 ">
              <div className="flex justify-center">
                <img src={mayor} alt="Mayor" />
              </div>

              <div>
                <div className="divide-y-4 divide-black">
                  {" "}
                  <h1 className="flex justify-center text-center text-3xl font-sans font-bold">
                    {" "}
                    Hon. DENNIS AMANCIO
                  </h1>
                  <h1 className="flex justify-center text-center text-2xl font-sans font-semibold italic">
                    {" "}
                    Local Chief Executive
                  </h1>
                </div>
              </div>
            </div>
            <div className=" flex flex-col p-20 ">
              <div className="flex justify-center">
                <img src={viceMayor} alt="Mayor" />
              </div>

              <div className=" flex justify-center items-center">
                <div className="divide-y-4 divide-black">
                  {" "}
                  <h1 className="flex justify-center text-center text-3xl font-sans font-bold">
                    {" "}
                    Hon. NELDA A. FAVILLARAN
                  </h1>
                  <h1 className="flex justify-center text-center text-2xl font-sans font-semibold italic">
                    {" "}
                    Vice Mayor
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center pt-20">
            <h1 className="font-sans font-bold text-5xl uppercase">
              {" "}
              The Sangguniang Bayan Members
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className=" flex flex-row justify-start items-center ">
                <div className=" flex flex-col p-20 ">
                  <div className="flex justify-center">
                    <img src={joseph} alt="Mayor" />
                  </div>

                  <div className=" flex justify-center items-center">
                    <div className="divide-y-4 divide-black">
                      {" "}
                      <h1 className="flex justify-center text-center text-lg font-sans font-bold">
                        {" "}
                        Hon. JOSEPH DAYAHAN
                      </h1>
                      <h1 className="flex justify-center text-center text-lg font-sans font-semibold italic">
                        {" "}
                        SB MEMBER
                      </h1>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col p-20 ">
                  <div className="flex justify-center">
                    <img src={leeDy} alt="Mayor" />
                  </div>

                  <div className=" flex justify-center items-center">
                    <div className="divide-y-4 divide-black">
                      {" "}
                      <h1 className="flex justify-center text-center text-lg font-sans font-bold">
                        {" "}
                        Hon. LEE F. DY
                      </h1>
                      <h1 className="flex justify-center text-center text-lg font-sans font-semibold italic">
                        {" "}
                        SB MEMBER
                      </h1>
                    </div>
                  </div>
                </div>{" "}
                <div className=" flex flex-col p-20 ">
                  <div className="flex justify-center">
                    <img src={roger} alt="Mayor" />
                  </div>

                  <div className=" flex justify-center items-center">
                    <div className="divide-y-4 divide-black">
                      {" "}
                      <h1 className="flex justify-center text-center text-lg font-sans font-bold">
                        {" "}
                        Hon. ROGER O. BALDADO
                      </h1>
                      <h1 className="flex justify-center text-center text-lg font-sans font-semibold italic">
                        {" "}
                        SB MEMBER
                      </h1>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col p-20 ">
                  <div className="flex justify-center">
                    <img src={densio} alt="Mayor" />
                  </div>

                  <div className=" flex justify-center items-center">
                    <div className="divide-y-4 divide-black">
                      {" "}
                      <h1 className="flex justify-center text-center text-lg font-sans font-bold">
                        {" "}
                        Hon. DENNIS ANTHONY M. DENSING
                      </h1>
                      <h1 className="flex justify-center text-center text-lg font-sans font-semibold italic">
                        {" "}
                        SB MEMBER
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row ">
                  <div className=" flex flex-col p-20 ">
                    <div className="flex justify-center">
                      <img src={christain} alt="Mayor" />
                    </div>

                    <div className=" flex justify-center items-center">
                      <div className="divide-y-4 divide-black">
                        {" "}
                        <h1 className="flex justify-center text-center text-lg font-sans font-bold">
                          {" "}
                          Hon. CHRISTIAN T. OPADA
                        </h1>
                        <h1 className="flex justify-center text-center text-lg font-sans font-semibold italic">
                          {" "}
                          SB MEMBER
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col p-20 ">
                    <div className="flex justify-center">
                      <img src={keith} alt="Mayor" />
                    </div>

                    <div className=" flex justify-center items-center">
                      <div className="divide-y-4 divide-black">
                        {" "}
                        <h1 className="flex justify-center text-center text-lg font-sans font-bold">
                          {" "}
                          Hon. KEITH B. ENARDECIDO
                        </h1>
                        <h1 className="flex justify-center text-center text-lg font-sans font-semibold italic">
                          {" "}
                          SB MEMBER
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col p-20 ">
                    <div className="flex justify-center">
                      <img src={esay} alt="Mayor" />
                    </div>

                    <div className=" flex justify-center items-center">
                      <div className="divide-y-4 divide-black">
                        {" "}
                        <h1 className="flex justify-center text-center text-lg font-sans font-bold">
                          {" "}
                          Hon. TESSA CLAIRE M. OLVEROS
                        </h1>
                        <h1 className="flex justify-center text-center text-lg font-sans font-semibold italic">
                          {" "}
                          SB MEMBER
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col p-20 ">
                    <div className="flex justify-center">
                      <img src={romulo} alt="Mayor" />
                    </div>

                    <div className=" flex justify-center items-center">
                      <div className="divide-y-4 divide-black">
                        {" "}
                        <h1 className="flex justify-center text-center text-lg font-sans font-bold">
                          {" "}
                          Hon. ROMULO R. ALFORQUE
                        </h1>
                        <h1 className="flex justify-center text-center text-lg font-sans font-semibold italic">
                          {" "}
                          SB MEMBER
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              {" "}
              <div className=" flex flex-col p-20 ">
                <div className="flex justify-center">
                  <img className="w-52" src={chona} alt="Mayor" />
                </div>

                <div className=" flex justify-center items-center">
                  <div className="divide-y-4 divide-black">
                    {" "}
                    <h1 className="flex justify-center text-center text-lg font-sans font-bold">
                      {" "}
                      Hon. CHONA A. AGUSTINO
                    </h1>
                    <h1 className="flex justify-center text-center text-lg font-sans font-semibold italic">
                      {" "}
                      ABC PRESIDENT
                    </h1>
                  </div>
                </div>
              </div>{" "}
              <div className=" flex flex-col p-20 ">
                <div className="flex justify-center">
                  <img className="w-48" src={jaja} alt="Mayor" />
                </div>

                <div className=" flex justify-center items-center">
                  <div className="divide-y-4 divide-black">
                    {" "}
                    <h1 className="flex justify-center text-center text-lg font-sans font-bold">
                      {" "}
                      Hon. JASPER JACOB M. NUSAN
                    </h1>
                    <h1 className="flex justify-center text-center text-lg font-sans font-semibold italic">
                      {" "}
                      SK-PRESIDENT
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex w-full bg-green-600 h-32"></div>
    </div>
  );
};

export default Officials;
