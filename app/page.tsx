"use client";

import { useState, FormEvent } from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FlipWords } from "@/components/ui/flip-words";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


export default function Home() {
  const [formData, setFormData] = useState({
    fornavn: "",
    etternavn: "",
    epost: "",
    telefon: "",
    firma: "",
    melding: "",
  });

  const [errors, setErrors] = useState({
    fornavn: "",
    etternavn: "",
    epost: "",
    telefon: "",
    firma: "",
    melding: "",
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  

  const validate = () => {
    const newErrors = {
      fornavn: "",
      etternavn: "",
      epost: "",
      telefon: "",
      firma: "",
      melding: "",
    };

    if (!formData.fornavn.trim()) newErrors.fornavn = "Fornavn er påkrevd.";
    if (!formData.etternavn.trim()) newErrors.etternavn = "Etternavn er påkrevd.";
    if (!formData.epost.trim()) {
      newErrors.epost = "E-post er påkrevd.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.epost)) {
      newErrors.epost = "Ugyldig e-postadresse.";
    }
    if (!formData.telefon.trim()) {
      newErrors.telefon = "Telefonnummer er påkrevd.";
    } else if (!/^\+?\d{8,15}$/.test(formData.telefon)) {
      newErrors.telefon = "Ugyldig telefonnummer.";
    }
    if (!formData.firma.trim()) newErrors.firma = "Firma er påkrevd.";
    if (!formData.melding.trim()) newErrors.melding = "Melding kan ikke være tom.";

    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Melding sendt!");
        setFormData({
          fornavn: "",
          etternavn: "",
          epost: "",
          telefon: "",
          firma: "",
          melding: "",
        });
      } else {
        alert("Noe gikk galt. Vennligst prøv igjen.");
      }
    } catch (error) {
      console.error("Feil ved innsending:", error);
      alert("Teknisk feil. Prøv igjen senere.");
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById("kontakt-skjema");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-black text-white">
      <motion.header
  className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 px-9"
  initial={{ opacity: 1 }}
  animate={{ opacity: formInView ? 0 : 1 }}
  transition={{ duration: 0.5 }}
>
  <div className="flex justify-start items-center">
    <Image
      src="/logo.png"
      alt="ADDVIA Logo"
      width={160}
      height={40}
      priority
    />
  </div>
</motion.header>


      <section className="h-screen">
        <WavyBackground>
          <div className="text-center px-4">
            <h1 className="text-white font-roboto text-2xl sm:text-4xl md:text-6xl font-bold leading-tight whitespace-nowrap">
              Mer salg uten mer styr
            </h1>
            <h1 className="text-white text-xl sm:text-3xl md:text-6xl font-bold leading-tight mt-2 whitespace-nowrap">
              <span className="font-playfair italic">Vi kobler deg til </span>
              <span className="font-roboto">kundene som betyr noe</span>
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl font-roboto font-medium text-white flex items-center justify-center gap-2">
              Rett{" "}
              <FlipWords
                words={["kontakt", "tidspunkt", "beslutningstaker"]}
                duration={2500}
                className="text-white"
              />
            </h2>
            <p className="text-white text-base md:text-lg mt-6 max-w-2xl mx-auto whitespace-normal">
              Vi analyserer markedet, identifiserer beslutningstakere og booker
              kvalifiserte møter. Ingen bindingstid, ingen faste kostnader – kun
              målbare resultater.
            </p>
            <div className="mt-8 flex justify-center">
              <HoverBorderGradient onClick={scrollToForm}>
                Kontakt oss
              </HoverBorderGradient>
            </div>
          </div>
        </WavyBackground>
      </section>

      <section className="min-h-screen flex items-center justify-center px-4 bg-black py-20">
        <div className="text-base sm:text-lg md:text-xl font-jakarta text-center">
          <TextGenerateEffect
            words="
            Addvia bistår med hele salgsprosessen: Vi analyserer markedet, identifiserer relevante beslutningstakere og booker kvalifiserte møter med dem. Ved behov deltar vi også i selve møtene, og sørger for grundig forarbeid og effektiv oppfølging i etterkant. Tjenestene våre er tilpasset hver kunde og fokusert på å skape konkrete salgsmuligheter – uten faste kostnader eller bindingstid."
          />
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-4 bg-black py-20 mb-32">
        <div className="max-w-4xl mx-auto font-jakarta text-center">
          <TextGenerateEffect
            words="
            Addvia AS er et spesialisert salgskonsulentselskap og en integrert del av det proprietære investeringsselskapet Stax Capital. Vi skaper varige forbindelser mellom våre kunder og deres marked. Vår styrke ligger i faglig tyngde der vi kombinerer strategisk innsikt med operativ gjennomføring for å levere målbare salgsresultater."
          />
        </div>
      </section>

      <section id="kontakt-skjema" ref={formRef} className="bg-black py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white text-3xl font-bold mb-8 text-center">
            Kontakt oss
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["fornavn", "etternavn"].map((field) => (
                <div key={field}>
                  <Label htmlFor={field} className="text-lg capitalize">
                    {field === "fornavn" ? "Fornavn" : "Etternavn"}
                  </Label>
                  <Input
                    id={field}
                    name={field}
                    type="text"
                    placeholder={field === "fornavn" ? "Ditt fornavn" : "Ditt etternavn"}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    className={errors[field as keyof typeof errors] ? "border-red-500" : ""}
                  />
                  {errors[field as keyof typeof errors] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field as keyof typeof errors]}</p>
                  )}
                </div>
              ))}
            </div>

            {[
              { name: "epost", label: "E-post", type: "email", placeholder: "Din e-postadresse" },
              { name: "telefon", label: "Telefonnummer", type: "tel", placeholder: "Ditt telefonnummer" },
              { name: "firma", label: "Firma", type: "text", placeholder: "Firma du representerer" },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <Label htmlFor={name} className="text-lg">
                  {label}
                </Label>
                <Input
                  id={name}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  className={errors[name as keyof typeof errors] ? "border-red-500" : ""}
                />
                {errors[name as keyof typeof errors] && (
                  <p className="text-red-500 text-sm mt-1">{errors[name as keyof typeof errors]}</p>
                )}
              </div>
            ))}

            <div>
              <Label htmlFor="melding" className="text-lg">
                Melding
              </Label>
              <textarea
                id="melding"
                name="melding"
                rows={5}
                placeholder="Hva gjelder henvendelsen?"
                value={formData.melding}
                onChange={handleChange}
                className={`w-full rounded-md bg-gray-50 px-3 py-2 text-sm text-black dark:bg-zinc-800 dark:text-white focus-visible:ring-2 focus-visible:ring-neutral-400 focus:outline-none ${
                  errors.melding ? "border border-red-500" : ""
                }`}
              />
              {errors.melding && (
                <p className="text-red-500 text-sm mt-1">{errors.melding}</p>
              )}
            </div>

            <div className="flex justify-center">
              <HoverBorderGradient>Send inn</HoverBorderGradient>
            </div>
          </form>
        </div>
      </section>
      {/* Short centered divider line */}
            <div className="flex justify-center my-4">
        <div className="w-[990px] h-px bg-gray-700"></div>
      </div>



    
      <footer className="bg-black text-center py-6 text-sm text-gray-400 space-y-2">
  <p>©2025 Addvia AS. All rights reserved.</p>
  <p>
    Built by {" "}
    <a
      href="https://www.linkedin.com/in/kesara03/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white underline transition duration-200"
    >
      Kesara Rathnasiri
    </a>
  </p>
</footer>


    </main>
  );
}
