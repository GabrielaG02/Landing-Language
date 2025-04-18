// src/components/Molecules/Form.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import Icon from '../Atoms/Icon';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "", // Valor que será manejado por PhoneInput
    correo: "",
    mensaje: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Regex para validar correo
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  // Manejo de campos de texto (excepto teléfono)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validación de correo
    if (name === "correo") {
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, correo: "Correo electrónico inválido." }));
      } else {
        setErrors((prev) => ({ ...prev, correo: "" }));
      }
    }
  };

  // Manejo específico del campo de teléfono (PhoneInput)
  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, telefono: value }));

    // Validación mínima: al menos 8 dígitos
    if (!value || value.replace(/\D/g, '').length < 8) {
      setErrors((prev) => ({ ...prev, telefono: "Teléfono inválido." }));
    } else {
      setErrors((prev) => ({ ...prev, telefono: "" }));
    }
  };

  // Verifica si el formulario está listo para enviar
  const isFormValid = () => {
    // Campos requeridos: nombre, empresa, teléfono, correo
    const telDigits = formData.telefono.replace(/\D/g, ''); // Extraer sólo dígitos
    return (
      formData.nombre.trim() !== "" &&
      formData.empresa.trim() !== "" &&
      telDigits.length >= 8 &&
      formData.correo.trim() !== "" &&
      emailRegex.test(formData.correo) &&
      !errors.telefono &&
      !errors.correo
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    const serviceID = "default_service";
    const templateID = "template_b783s7t";
    const userID = "service_rvhjmr5";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        () => {
          setIsSubmitted(true);
          alert("¡Formulario enviado!");
          setFormData({
            nombre: "",
            correo: "",
            telefono: "",
            empresa: "",
            mensaje: ""
          });
        },
        (err) => {
          console.error("Error al enviar el formulario:", err);
          alert("Error al enviar el formulario, intenta nuevamente.");
        }
      );
  };


  return (
    <div className="flex flex-col space-y-6">
      {/* Ícono y texto de cabecera */}
      <div>

        <h3 className="text-(--color-neutral-800) font-semibold text-lg">
          Déjanos tus datos y nos pondremos en contacto contigo
        </h3>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
        {/* Nombres Completos */}
        <Input
          placeholder="Nombres Completos *"
          type="text"
          name="nombre"
          size="w-[90%]"
          inputColor="bg-(--color-neutral-300)"
          value={formData.nombre}
          onChange={handleChange}
          disabled={isSubmitted}
        />
        {/* Empresa */}
        <Input
          placeholder="Empresa *"
          type="text"
          name="empresa"
          size="w-[90%]"
          inputColor="bg-(--color-neutral-300)"
          value={formData.empresa}
          onChange={handleChange}
          disabled={isSubmitted}
        />

        {/* Teléfono con PhoneInput (banderas) */}
        <div className="w-[90%]">
          <PhoneInput
            country={"co"}  // País inicial (puedes cambiarlo)
            value={formData.telefono}
            onChange={handlePhoneChange}
            disabled={isSubmitted}
            inputStyle={{
              width: "100%",
              height: "2.5rem",
              fontSize: "14px",
              borderRadius: "0.2rem",
              border: "none",
              backgroundColor: "#f7f6f6c4",
            }}
            buttonStyle={{
              backgroundColor: "#e9e8e8c4",
              borderRadius: "0.2rem",
              border: "none",
            }}
          />
          {/* Error de teléfono */}
          {errors.telefono && (
            <p className="text-red-500 text-sm">{errors.telefono}</p>
          )}
        </div>

        {/* Correo corporativo */}
        <Input
          placeholder="Correo corporativo *"
          type="email"
          name="correo"
          size="w-[90%]"
          inputColor="bg-(--color-neutral-300)"
          value={formData.correo}
          onChange={handleChange}
          disabled={isSubmitted}
        />
        {/* Error de correo */}
        {errors.correo && (
          <p className="text-red-500 text-sm">{errors.correo}</p>
        )}

        {/* Mensaje (opcional) */}
        <Input
          placeholder="Mensaje (opcional)"
          type="text"
          name="mensaje"
          size="w-[90%]"
          inputColor="bg-(--color-neutral-300)"
          value={formData.mensaje}
          onChange={handleChange}
          disabled={isSubmitted}
        />

        {/* Botón de envío */}
        <div>
          <Button
            text={isSubmitted ? "Enviado" : "Enviar"}
            tipo="primario"
            onClick={handleSubmit}
            // Deshabilitar si no es válido o ya se envió
            disabled={!isFormValid() || isSubmitted}
          />
        </div>
      </form>
    </div>
  );
}
