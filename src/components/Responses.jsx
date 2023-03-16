import React, { useEffect, useState } from 'react';
import { firebaseFirestore } from '../config/firebase';
import { collection, getDocs } from "firebase/firestore";

const Respuestas = () => {
  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    const obtenerRespuestas = async () => {
      const querySnapshot = await getDocs(collection(firebaseFirestore, "surveyResponses"));
      const respuestas = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRespuestas(respuestas);
    };

    obtenerRespuestas();
  }, []);

  return (
    <table className="table-fixed w-full">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-2 w-1/5 text-left font-semibold">Nombre completo</th>
          <th className="px-4 py-2 w-1/5 text-left font-semibold">Correo electrónico</th>
          <th className="px-4 py-2 w-1/5 text-left font-semibold">Fecha de nacimiento</th>
          <th className="px-4 py-2 w-1/5 text-left font-semibold">País de origen</th>
          <th className="px-4 py-2 w-1/5 text-left font-semibold">Acepta términos y condiciones</th>
        </tr>
      </thead>
      <tbody>
        {respuestas.map((response) => (
          <tr key={response.id} className="bg-white border-b">
            <td className="px-4 py-2 w-1/5">{response.full_name}</td>
            <td className="px-4 py-2 w-1/5">{response.email}</td>
            <td className="px-4 py-2 w-1/5">{response.birth_date}</td>
            <td className="px-4 py-2 w-1/5">{response.country_of_origin}</td>
            <td className="px-4 py-2 w-1/5">{response.terms_and_conditions ? 'Sí' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Respuestas;
