"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { useLanguageStore } from "../store/useLanguageStore";

interface FormData {
  nombre: string; // Nombre y apellido
  correo: string; // Correo electrónico
  asunto: string; // Asunto del mensaje
  mensaje: string; // Contenido del mensaje
}

const translationsContact = {
  de: {
    quote:
      "Wir sind hier, um alle deine Fragen anzuhören und den Kurs deines Unternehmens zu ändern.",
    title: "Kontakt",
    title2: "Wir warten auf dich",
    description:
      "Wir sind stets bereit, deinem Unternehmen mit unseren Geschäftsplänen zum Durchbruch zu verhelfen und sein Wachstum fortzusetzen.",
    placeholder_name: "Name",
    placeholder_email: "E-Mail",
    placeholder_subject: "Betreff",
    placeholder_message: "Nachricht",
    button: "Senden",
    success_message:
      "Wir haben Ihre Nachricht erhalten! Wir melden uns in Kürze bei Ihnen. Vielen Dank!",
    error_name_required: "Name ist erforderlich",
    error_name_pattern: "Geben Sie Ihren Vor- und Nachnamen ein",
    error_email_required: "E-Mail ist erforderlich",
    error_email_pattern: "Die E-Mail ist falsch",
    error_subject_required: "Betreff ist erforderlich",
    error_message_required: "Die Nachricht ist erforderlich",
  },
  en: {
    quote:
      "We are here to listen to all your questions and change the course of your business.",
    title: "Contact",
    title2: "We are waiting for you",
    description:
      "We are always ready to help your company break through and continue its growth with our business plans.",
    placeholder_name: "Name",
    placeholder_email: "Email",
    placeholder_subject: "Subject",
    placeholder_message: "Message",
    button: "Send",
    success_message:
      "We have received your message! We will get back to you shortly. Thank you!",
    error_name_required: "Name is required",
    error_name_pattern: "Enter your first and last name",
    error_email_required: "Email is required",
    error_email_pattern: "The email is incorrect",
    error_subject_required: "Subject is required",
    error_message_required: "The message is required",
  },
};

const ContactForm = () => {
  const { lang } = useLanguageStore();
  const t = translationsContact[lang];
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post("/api/nodemailer", data);
      if (response.data.message === "Email sent successfully!") {
        // ¡Recibimos tu mensaje! Pronto te daremos respuesta. Muchas Gracias!
        setSuccessMessage(t.success_message);
        reset();
      }
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.log("Error al enviar datos al servidor:", error);
    }
  };

  return (
    //  GRADIENTE  bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500
    // from-[#f4e7d2] via-[#ebe1d2] to-[#FFFBF5]
    <div
      className="w-full bg-gradient-to-br   px-8
      lg:px-16 text-center lg:my-[0px]  pt-14 pb-60  lg:pb-52 "
    >
      {/* <h1 className=" text-4xl font-medium lg:text-[35px] leading-[64px] font-rilke-monecias text-[#534547]">
        Contacto
      </h1> */}
      <p className="font-medium text-xl pt-6 lg:pt-[40px] lg:text-[20px] font-vollkornSC">
        {t.quote}
      </p>
      <div className=" py-3 ">
        {successMessage && <p className="text-[#03b418]">{successMessage}</p>}
      </div>
      <div className="w-full  lg:py-8 lg:pr-44 mt-2 rounded-2xl  sm:px-10 md:px-24 lg:px-0">
        <motion.div
          className="max-w-[61rem] w-full  lg:max-w-[800px]  mx-auto relative py-[4.5rem]   rounded-xl backdrop-blur-lg  bg-white/5 "
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            boxShadow: "rgba(140, 184, 213) 0px 1px 20px 0px inset",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <form
            className="flex flex-col gap-4 mx-auto relative w-full h-full pr-4 pl-4 lg:pr-64 lg:pl-16"
            action=""
            id="form"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete=""
          >
            {/* <motion.div
            className="absolute inset-0 -z-10 backdrop-blur-lg"
            // shadow-anna-blue shadow-[0px_1px_7px_0px]
            initial={{ scale: 0, opacity: 0.1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          /> */}
            {/* <div
            className={`absolute -z-10 transition-all duration-700   h-24 w-24 right-0 top-0 
            
          `}
            style={{
              backgroundColor: "rgba(27, 119, 150)",
              filter: "blur(50px)",
              borderRadius: "20px",
              // opacity: 1,
              zIndex: 1,
            }}
          /> */}

            <motion.div
              className=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <header className=" text-3xl pb-4   lg:text-left font-rilke-monecias ">
                {t.title}
              </header>
            </motion.div>
            <motion.div
              className=""
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex flex-col-reverse">
                <input
                  type="text"
                  id="name"
                  placeholder={t.placeholder_name}
                  {...register("nombre", {
                    required: true,
                    pattern: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
                  })}
                  className=" p-3 text-sm h-10 placeholder:text-[#757575]/70 placeholder:italic placeholder:font-[100] placeholder:text-sm rounded-md shadow-[inset_0_0px_3px_0_rgba(140,184,213,1)]"
                />

                <label htmlFor="name" className=" flex text-sm">
                  <div className="mr-1 text-slate-600"> </div>{" "}
                  <div className="text-slate-600"> </div>
                  <span className="w-full flex justify-end items-center">
                    {errors.nombre?.type === "required" && (
                      <span className="text-red-600 text-[12px] ">
                        {/* //Nombre es requerido */}
                        {t.error_email_required}
                      </span>
                    )}
                    {errors.nombre?.type === "pattern" && (
                      <p className="text-red-600 text-[12px]">
                        {/* // Ingresa tu Nombre y Apellido */}
                        {t.error_name_pattern}
                      </p>
                    )}
                  </span>
                </label>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex flex-col-reverse">
                <input
                  type="email"
                  id="email"
                  placeholder={t.placeholder_email}
                  {...register("correo", {
                    required: true,
                    pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  })}
                  className="border p-3 text-sm h-10 placeholder:text-[#757575]/70 placeholder:italic placeholder:font-[100] placeholder:text-sm rounded-md shadow-[inset_0_0px_3px_0_rgba(140,184,213,1)]"
                />

                <label htmlFor="email" className="flex text-sm text-slate-600">
                  <span className="w-full flex justify-end items-center">
                    {errors.correo?.type === "pattern" && (
                      <span className="text-red-600 text-[12px]">
                        {/* // El Email es incorrecto */}
                        {t.error_email_pattern}
                      </span>
                    )}
                    {errors.correo?.type === "required" && (
                      <span className="text-red-600 text-[12px]">
                        {/* Email es requerido{" "} */}
                        {t.error_email_required}
                      </span>
                    )}
                  </span>
                </label>
              </div>
            </motion.div>
            {/* <div className="flex flex-col-reverse my-3">
            <input
              type="text"
              id="telephone"
              placeholder="Numero Telefónico"
              {...register("celular", {
                required: true,
                pattern: /^(\+\d{1,2}|(\(\d{1,4}\)))?\d{5,15}$/,
              })}
              className="border p-3 text-sm h-10 placeholder:text-[#757575]/70 placeholder:italic placeholder:font-[100] placeholder:text-base"
            />

            <label htmlFor="telephone" className="flex text-sm text-slate-600">
              <span className="w-full flex justify-end">
                {errors.celular?.type === "required" && (
                  <span className="text-red-600 text-[12px]">
                    Celular es requerido{" "}
                  </span>
                )}
              </span>
            </label>
          </div> */}
            <motion.div
              className=""
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.9,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex flex-col-reverse">
                <input
                  type="text"
                  id="asunto"
                  placeholder={t.placeholder_subject}
                  {...register("asunto", {
                    required: true,
                  })}
                  className="border p-3 text-sm h-10 placeholder:text-[#757575]/70 placeholder:italic placeholder:font-[100] placeholder:text-sm rounded-md shadow-[inset_0_0px_3px_0_rgba(140,184,213,1)]"
                />

                <label
                  htmlFor="asunto"
                  className="flex  text-sm text-slate-600"
                >
                  <span className="w-full flex justify-end">
                    {errors.asunto?.type === "required" && (
                      <span className="text-red-600 text-[12px]">
                        {/* Asunto es requerido{" "} */}
                        {t.error_subject_required}
                      </span>
                    )}
                  </span>
                </label>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 1.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex flex-col-reverse">
                <textarea
                  id="mensaje"
                  cols={1}
                  rows={4}
                  placeholder={t.placeholder_message}
                  {...register("mensaje", {
                    required: true,
                  })}
                  className="border p-3 text-sm placeholder:text-[#757575]/70 placeholder:italic placeholder:font-[100] placeholder:text-sm rounded-md shadow-[inset_0_0px_3px_0_rgba(140,184,213,1)]"
                ></textarea>

                <label
                  htmlFor="mensaje"
                  className="flex text-sm text-slate-600"
                >
                  <span className="w-full flex justify-end items-center">
                    {errors.mensaje?.type === "required" && (
                      <span className="text-red-600 text-[12px]">
                        {/* El Mensaje es requerido{" "} */}
                        {t.error_message_required}
                      </span>
                    )}
                  </span>
                </label>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 1.5,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="w-full  lg:flex lg:justify-end">
                <input
                  type="submit"
                  value={t.button}
                  className="cursor-pointer border rounded-md w-1/2 lg:w-auto text-white bg-[#8CB8D5] sm:px-12 py-2 italic "
                  style={{
                    boxShadow:
                      "10px 10px 2px -1px rgb(33, 41, 51, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                />
              </div>
            </motion.div>
            {/* bg-[#524747] te esperamos form desktop */}
            <div className="hidden lg:block  lg:absolute  shadow-lg top-20 h-[34rem] right-0 translate-x-1/2 w-1/2 max-w-[28rem] px-14 py-20 rounded-xl bg-[#8CB8D5] overflow-hidden z-50">
              <div className="text-left relative text-[#D5CACA]">
                <motion.div
                  className="hidden lg:block w-12 lg:w-16 z-10 absolute -bottom-1 lg:-top-[18%]  lg:-right-[18%] -translate-x-1/2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <img src="/logo/logo-no-bg/logo-white-no-bg.png" />
                </motion.div>
                {/* <img
                src="/assets/rose/rosa-blanca.jpg"
                className="hidden lg:block w-12 lg:w-[4.5rem]  z-10 absolute -bottom-1 lg:-top-[4rem]  lg:-right-[3rem] brightness-150  overflow-hidden"
                alt=""
              /> */}
                <motion.div
                  className=""
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <p className="text-3xl pb-8 font-rilke-monecias text-anna-white font-bold">
                    {t.title2}
                  </p>
                </motion.div>
                <motion.div
                  className=""
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <p className="pb-8 text-anna-white">{t.description}</p>
                </motion.div>
                <div className="">
                  {/* <a
                  href="https://www.google.com/maps/place/Caf%C3%A9+Rilke+Per%C3%BA/@-12.1213276,-77.0368608,19.77z/data=!4m6!3m5!1s0x9105c9b327b765cb:0x560f84cb9c54101a!8m2!3d-12.1213366!4d-77.0366567!16s%2Fg%2F11vbxjvk1w?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-4 pb-3 mb-3 hover:scale-110 transform duration-500 hover:shadow-2xl rounded-lg">
                    <div className="">
                      <IoLocationSharp color="#FF7776" size={22} className="" />
                    </div>
                    <div className="">
                      <p className="text-lg pb-[0.15rem] font-black text-[#D8CCCC] brightness-110  flex leading-6">
                        Miraflores
                      </p>
                      <p className="text-sm">C. José Gálvez 685</p>
                      <p className="text-sm leading-4">
                        Miraflores, Lima, Perú
                      </p>
                    </div>
                  </div>
                </a> */}
                  <a
                    href="mailto:info@as-vision-partners.com?subject=Kontaktinformationen&body=Hallo,%20ich%20würde%20gerne%20mit%20Ihnen%20zusammenarbeiten%20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex gap-4 p-2 mb-3 hover:scale-110 transform duration-500 hover:shadow-2xl rounded-2xl">
                      <div>
                        <motion.div
                          initial={{ scale: 0, opacity: 0, y: -10 }}
                          whileInView={{ scale: 1, opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true, amount: 0.1 }}
                        >
                          <IoMdMail color="#012F4B" size={20} />
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0, y: -10 }}
                        whileInView={{ scaleX: 1, opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.3,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true, amount: 0.1 }}
                      >
                        <p className="text-base pb-1 leading-5 text-anna-gray font-semibold font-cabin_sans">
                          info@as-vision-partners.com
                        </p>
                      </motion.div>
                    </div>
                  </a>
                  <a href="tel:+4915679314176">
                    <motion.div
                      className="flex gap-4 p-2 mb-3 hover:scale-110 transform duration-500 hover:shadow-2xl rounded-2xl"
                      initial={{ scaleX: 0, opacity: 0, y: -10 }}
                      whileInView={{ scaleX: 1, opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      <div>
                        <motion.div
                          initial={{ scale: 0, opacity: 0, y: -10 }}
                          whileInView={{ scale: 1, opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 1.2,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true, amount: 0.1 }}
                        >
                          <IoCall color="#132351" size={20} />
                        </motion.div>
                      </div>
                      <div>
                        <p className="text-base text-anna-gray font-semibold font-cabin_sans">
                          +49 15679 314176
                        </p>
                      </div>
                    </motion.div>
                  </a>

                  <a
                    href="https://wa.me/4916091471897?text=Hallo,%20ich%20würde%20gerne%20mit%20Ihnen%20zusammenarbeiten%20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      className="flex gap-4 p-2 mb-6 hover:scale-110 transform duration-500 hover:shadow-2xl rounded-2xl"
                      initial={{ scaleX: 0, opacity: 0, y: -10 }}
                      whileInView={{ scaleX: 1, opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.9,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      <div>
                        <motion.div
                          initial={{ scale: 0, opacity: 0, y: -10 }}
                          whileInView={{ scale: 1, opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 1.4,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true, amount: 0.1 }}
                        >
                          <IoLogoWhatsapp color="#132351" size={22} />
                        </motion.div>
                      </div>
                      <div className="">
                        <p className="text-base text-anna-gray font-semibold font-cabin_sans">
                          +49 160 91471897
                        </p>
                      </div>
                    </motion.div>
                  </a>
                </div>
                {/* <div className="flex gap-10 pl-10 ">
                <p>
                  <a
                    href="https://www.instagram.com/caferilkeperu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      size={25}
                      className="hover:text-white text-[#e7e7e7] hover:scale-125 duration-700 transform "
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.facebook.com/labodeguitadanke/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF
                      size={25}
                      className="hover:text-white text-[#e7e7e7] hover:scale-125 duration-700 transform "
                    />
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/913441311?text=Hola%20que%20tal%20vengo%20de%20cafe-rilke.com%20quisiera%20hacer%20un%20pedido"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      size={28}
                      className="hover:text-white text-[#e7e7e7] hover:brightness-200 hover:scale-125 duration-700 transform  "
                    />
                  </a>
                </p>
              </div> */}
              </div>
            </div>
          </form>
        </motion.div>

        <div className="block lg:hidden mt-10   min-h-[37rem]   px-10 sm:px-14 py-24 rounded-xl mx-auto relative overflow-hidden bg-[#8CB8D5]">
          <div className="text-left relative text-[#D5CACA]">
            <motion.div
              className="lg:hidden w-24 sm:w-28  z-10 absolute -translate-x-1/2 -bottom-[5.1rem] -right-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <img src="/logo/logo-no-bg/logo-white-no-bg.png" alt="" />
            </motion.div>
            {/* <img
              src="/assets/rose/rosa-blanca.jpg"
              className="lg:hidden w-12 sm:w-14  z-1 absolute -translate-x-1/2 -top-[5.5rem] left-0 "
              alt=""
            /> */}
            {/* <img
                src="/assets/rose/rosa-banner.png"
                className="hidden lg:block w-12 lg:w-10 z-10 absolute -bottom-1 lg:-bottom-14  lg:-right-[6.5rem] -translate-x-1/2 "
              /> */}
            <p className="text-3xl pb-8 font-cabin text-anna-white text-center">
              {t.title2}
            </p>
            <p className="pb-8 text-justify">{t.description}</p>
            <div className="flex justify-center flex-col">
              {/* <a
                href="https://www.google.com/maps/place/Caf%C3%A9+Rilke+Per%C3%BA/@-12.1213276,-77.0368608,19.77z/data=!4m6!3m5!1s0x9105c9b327b765cb:0x560f84cb9c54101a!8m2!3d-12.1213366!4d-77.0366567!16s%2Fg%2F11vbxjvk1w?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-4 pb-3 mb-3 hover:scale-110 transform duration-500 hover:shadow-2xl rounded-lg">
                  <div className="">
                    <IoLocationSharp color="#FF7776" size={22} className="" />
                  </div>
                  <div className="">
                    <p className="text-lg pb-[0.15rem] font-black text-[#D8CCCC] brightness-110  flex leading-6">
                      Miraflores
                    </p>
                    <p className="text-sm">C. José Gálvez 685</p>
                    <p className="text-sm leading-4">Miraflores, Lima, Perú</p>
                  </div>
                </div>
              </a> */}
              <a
                href="mailto:info@as-vision-partners.com?subject=Kontaktinformationen&body=Hallo,%20ich%20würde%20gerne%20mit%20Ihnen%20zusammenarbeiten%20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-4 p-2 mb-3 hover:scale-110 transform duration-500 hover:shadow-2xl rounded-lg">
                  <div>
                    <IoMdMail color="#132351" size={18} />
                  </div>
                  <div>
                    <p className="text-[0.93rem] pb-1 leading-5 font-cabin_sans">
                      info@as-vision-partners.com
                    </p>
                  </div>
                </div>
              </a>
              <a href="tel:+4915679314176">
                <div className="flex gap-4 p-2 mb-3 hover:scale-110 transform duration-500 hover:shadow-2xl">
                  <div>
                    <IoCall color="#132351" size={20} />
                  </div>
                  <div>
                    <p className=" font-cabin_sans">+49 15679 314176</p>
                  </div>
                </div>
              </a>
              <a
                href="https://wa.me/4916091471897?text=Hallo,%20ich%20würde%20gerne%20mit%20Ihnen%20zusammenarbeiten%20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-4 p-2 mb-6 hover:scale-110 transform duration-500 hover:shadow-2xl">
                  <div>
                    <IoLogoWhatsapp color="#132351" size={22} />
                  </div>
                  <div>
                    <p className=" font-cabin_sans">+49 160 91471897</p>
                  </div>
                </div>
              </a>
            </div>
            {/* <div className="flex gap-10 justify-center pt-10">
              <p>
                <a
                  href="https://www.instagram.com/caferilkeperu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={25}
                    className="hover:text-white text-[#e7e7e7] hover:scale-125 duration-700 transform "
                  />
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/labodeguitadanke/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF
                    size={25}
                    className="hover:text-white text-[#e7e7e7] hover:scale-125 duration-700 transform "
                  />
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/913441311?text=Hola%20que%20tal%20vengo%20de%20cafe-rilke.com%20quisiera%20hacer%20un%20pedido"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp
                    size={28}
                    className="hover:text-white text-[#e7e7e7] hover:brightness-200 hover:scale-125 duration-700 transform  "
                  />
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
