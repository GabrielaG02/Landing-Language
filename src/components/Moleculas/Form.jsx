import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import Input from '../Atoms/Input';
import Button from '../Atoms/Button';

export default function Form() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Correo electrónico inválido." }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));

    if (!value || value.replace(/\D/g, '').length < 8) {
      setErrors((prev) => ({ ...prev, phone: "Teléfono inválido." }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const isFormValid = () => {
    const telDigits = formData.phone.replace(/\D/g, '');
    return (
      formData.name.trim() !== "" &&
      telDigits.length >= 8 &&
      formData.email.trim() !== "" &&
      emailRegex.test(formData.email) &&
      !errors.phone &&
      !errors.email
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    const serviceID = "service_u5ylzgv";
    const templateID = "template_ldycs9e";
    const publicKey = "d8hbR3vWeqvPfYgW8";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(
        () => {
          setIsSubmitted(true);
          alert("¡Formulario enviado!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
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
      <div>
        <h2 className="text-3xl font-semibold text-[var(--color-primary)] mb-5">Contact Us</h2>
        <h3 className="text-(--color-neutral-700) font-medium text-lg">
          We are here to help with your linguistic needs
        </h3>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 flex flex-col" id="form">
        <Input
          placeholder="Name *"
          type="text"
          name="name"
          size="w-[90%]"
          inputColor="bg-(--color-neutral-300)"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitted}
        />
        <Input
          placeholder="Mail *"
          type="email"
          name="email"
          size="w-[90%]"
          inputColor="bg-(--color-neutral-300)"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitted}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <div className="w-[90%]">
          <PhoneInput
            country={"co"}
            value={formData.phone}
            onChange={handlePhoneChange}
            disabled={isSubmitted}
            inputProps={{ name: "phone" }}
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
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <Input
          placeholder="Message"
          type="textarea"
          name="message"
          size="w-[90%] h-[15vh]"
          inputColor="bg-(--color-neutral-300)"
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitted}
        />

        <div>
          <Button
            text={isSubmitted ? "Enviado" : "Enviar"}
            tipo="primario"
            type="submit"
            disabled={!isFormValid() || isSubmitted}
          />
        </div>
      </form>
    </div>
  );
}
