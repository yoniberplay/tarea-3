"use client";
import { useState } from "react";
import React from "react";

export default function Modaltabla() {
  const [showModal, setShowModal] = React.useState(false);
  const [resultado, setResultado] = useState(0);
  const [numero1, setNumero1] = useState(0);

  const tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const generaTabla = () => {
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
          Tabla de multiplicar{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Introduce un numero y obten la tabla de multiplicar de ese numero
          hasta el 13.
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
                    Tabla de multiplicar
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
                  {/* <button
                    onClick={generaTabla}
                    class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Obtener Tabla
                  </button> */}

                  <div class="text-center overflow-x-auto mt-3 rounded-md">
                    <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Tabla del {numero1}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tabla.map((elemento, indice) => (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-3 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {indice + 1} X {numero1} ={" "}
                              {(indice + 1) * numero1}
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
