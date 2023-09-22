"use client";
import { useState } from "react";
import React from "react";

export default function Modalnumerosletras() {
  const [showModal, setShowModal] = React.useState(false);
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState("");

  const sumar = () => {
    const suma = numero1 + numero2;
    setResultado(suma);
  };

  return (
    <>
      <button
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Numeros a letras{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Coloca un numero del 1 al 1000 y obten ese numero en letras.
        </p>
      </button>
      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              >
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    Numeros a letras
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div class="bg-white p-8 rounded-lg shadow-md w-96 text-black">
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    class="w-full border p-2 rounded-md mb-4"
                    placeholder="Introduce un numero"
                    onChange={(e) => setNumero1(Number(e.target.value))}
                  />
                  <button
                    onClick={sumar}
                    class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Obtener
                  </button>
                  <div class="mt-4">
                    <strong>{resultado}</strong>
                    <p id="resultado" class="text-lg font-semibold"></p>
                  </div>
                </div>

                {/*footer*/}
                <div className=" flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    class="w-80  flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Cerrar
                    <svg
                      class="h-4 text-gray-800 dark:text-white ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
