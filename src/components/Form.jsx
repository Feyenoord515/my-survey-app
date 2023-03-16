import React, { useState, useRef } from 'react';
import { firebaseFirestore} from '../config/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import TextInput from "./TextInput";
import EmailInput from "./EmailInput";
import DateInput from "./DateInput";
import SelectInput from "./SelectInput";
import CheckboxInput from "./CheckboxInput";
import SubmitButton from "./SubmitButton";
import { Link } from "react-router-dom";

const Form = () => {
    const divForAutoScroll = useRef();
    const [formData, setFormData] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const messagesCollectionRef = collection(firebaseFirestore, "surveyResponses");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
    
      try {
        await addDoc(messagesCollectionRef, {
          full_name: formData.full_name,
          email: formData.email,
          birth_date: formData.birth_date,
          country_of_origin: formData.country_of_origin,
          terms_and_conditions: formData.terms_and_conditions,
          createdAt: serverTimestamp(),
        });
    
        setFormSubmitted(true);
       
        divForAutoScroll.current?.scrollIntoView({ behavior: "smooth" });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
   
    };
    
    return (
      <div className="max-w-md mx-auto">
      <form
        className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-md p-6 space-y-6"
        onSubmit={handleSubmit}
      >
        <TextInput
          label="Nombre completo"
          name="full_name"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          inputClass="w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          labelClass="block text-sm font-medium text-white"
          containerClass="my-4"
        />
        <EmailInput
          label="Correo electrónico"
          name="email"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          inputClass="w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          labelClass="block text-sm font-medium text-white"
          containerClass="my-4"
        />
        <DateInput
          label="Fecha de nacimiento"
          name="birth_date"
          required
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          containerClass="my-4"
        />        <SelectInput label="¿Cuál es tu país de origen?" name="country_of_origin" options={[
            { label: "Argentina", value: "argentina" },
            { label: "Brasil", value: "brasil" },
            { label: "Chile", value: "chile" },
            { label: "Colombia", value: "colombia" },
            { label: "México", value: "mexico" },
            { label: "Perú", value: "peru" },
            { label: "Uruguay", value: "uruguay" },
            { label: "Venezuela", value: "venezuela" },
          ]} required onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} inputClass="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          labelClass="block text-sm font-medium text-gray-700"
          containerClass="mt-4" />
          <CheckboxInput label="¿Acepta los términos y condiciones?" name="terms_and_conditions" required onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.checked })} />
          <SubmitButton label="Enviar"  buttonClass="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
        </form>
        {formSubmitted && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-blue-500 bg-opacity-50">
    <div className="bg-white rounded-lg p-4">
      <p className="mb-2">Respuestas enviadas</p>
      <Link to="/respuestas" className="underline">Ver respuestas</Link>
    </div>
  </div>
)}

{formSubmitted && setTimeout(() => {
  document.querySelector('.fixed.inset-0').classList.add('hidden');
}, 30000)}
      </div>
    );
  };
  
  export default Form;