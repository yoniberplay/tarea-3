"use client";
import React from "react";
import { useState } from "react";

export default function ModalSumadora() {
  const [showModal, setShowModal] = React.useState(false);
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

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
          Sumadora{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Sumadora de 2 números y mostrar el resultado
        </p>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    Calculadora
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
                    id="numero1"
                    class="w-full border p-2 rounded-md mb-4"
                    placeholder="Número 1"
                    onChange={(e) => setNumero1(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    id="numero2"
                    class="w-full border p-2 rounded-md mb-4"
                    placeholder="Número 2"
                    onChange={(e) => setNumero2(Number(e.target.value))}
                  />
                  <button
                    onClick={sumar}
                    class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Sumar
                  </button>
                  <div class="mt-4">
                    <strong>Resultado: {resultado}</strong>
                    <p id="resultado" class="text-lg font-semibold"></p>
                  </div>
                </div>

                {/*footer*/}
                <div className=" flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
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
