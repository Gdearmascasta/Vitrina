"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CreditCard, Calendar, Users, Check, FileText, 
  HelpCircle, ShieldAlert, Award, Send, CheckCircle2,
  Lock, X, ChevronRight
} from "lucide-react";

export default function BookingCheckout() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [showViabilityModal, setShowViabilityModal] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(4);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep(2);
  };

  const resetBookingForm = () => {
    setShowBookingModal(false);
    setBookingStep(1);
    setName("");
    setEmail("");
    setDate("");
    setGuests(4);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
      
      {/* Editorial Title */}
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">Reserva de Alta Gama</span>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-deep-cocoa mt-2">
          Checkout Financiero
        </h2>
        <div className="h-[1px] w-20 bg-gold/50 mx-auto mt-4" />
        <p className="font-sans text-sm text-sage max-w-lg mx-auto mt-4 leading-relaxed font-light">
          Asegura tu participación en este ritual de fermentación ancestral y preservación territorial.
        </p>
      </div>

      {/* Pricing Card & Justification Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* LEFT CARD: Pricing Details */}
        <div className="lg:col-span-6 bg-deep-cocoa rounded-3xl p-8 text-ivory border border-gold/30 shadow-xl flex flex-col justify-between relative overflow-hidden">
          {/* Subtle background overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.15)_0%,transparent_60%)]" />
          
          <div className="relative z-10">
            {/* Tag */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-sans tracking-[0.2em] text-gold uppercase font-bold">Ritual Sensorial</span>
              <span className="text-[10px] font-sans bg-gold/20 text-gold px-3 py-1 rounded-full border border-gold/30">Cupos Limitados</span>
            </div>

            {/* Price Title */}
            <div className="mb-6">
              <span className="text-xs text-sand/60 block uppercase tracking-wider">Valor de Admisión</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl md:text-5xl font-serif font-light text-gold">$280.000 COP</span>
                <span className="text-xs text-sand/65">/ por Pax</span>
              </div>
              <span className="text-[10px] font-sans text-sand/50 block mt-1">Incluye todos los impuestos y aportes campesinos directos.</span>
            </div>

            {/* Inclusions */}
            <div className="border-t border-gold/20 pt-6 mb-8">
              <h4 className="font-serif text-sm italic text-gold mb-4">La Experiencia Incluye:</h4>
              <ul className="space-y-3">
                {[
                  "Experiencia guiada personalizada de alta cocina campesina.",
                  "Safari de cosecha y selección en los patios agroforestales.",
                  "Degustación guiada de fermentos ancestrales de guama.",
                  "Kit previo 'Aroma del Monte' despachado a su hotel/residencia.",
                  "Souvenir ceremonial con frasco de Néctar y semillas.",
                  "Taller artesanal de batido con molinillo de guayacán.",
                ].map((inc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-sand/90 font-sans font-light leading-relaxed">
                    <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action button */}
          <div className="relative z-10 border-t border-gold/20 pt-6">
            <button
              onClick={() => setShowBookingModal(true)}
              className="w-full py-4 rounded-xl bg-gold hover:bg-gold-hover text-deep-cocoa font-sans font-semibold tracking-wider transition-all duration-300 transform active:scale-98 shadow-md shadow-gold/15 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Reservar Experiencia</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-sand/50 font-sans mt-3">
              <Lock className="h-3 w-3" />
              <span>Conexión de reserva protegida</span>
            </div>
          </div>

        </div>

        {/* RIGHT CARD: Conditions & Commercial Justification */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          
          {/* Card 1: Justificación Comercial */}
          <div className="bg-ivory border border-gold/20 rounded-3xl p-6 md:p-8 shadow-md flex-grow">
            <span className="p-2.5 rounded-full bg-gold/15 text-gold inline-flex mb-4">
              <Award className="h-5 w-5" />
            </span>
            <h3 className="font-serif text-xl md:text-2xl font-light text-deep-cocoa mb-3">
              Justificación de Exclusividad
            </h3>
            <p className="font-sans text-sm text-cocoa/80 leading-relaxed font-light mb-4">
              Néctar de Algodón no es una oferta masiva. Este valor refleja de manera fiel y transparente el esfuerzo y el cuidado en cada detalle de la experiencia.
            </p>
            <div className="bg-sage/10 p-5 rounded-2xl border border-sage/20">
              <p className="font-serif text-sm italic text-dark-green leading-relaxed">
                “Este valor refleja la exclusividad de una experiencia inmersiva de baja capacidad, diseñada bajo principios de sostenibilidad territorial, personalización sensorial y preservación cultural.”
              </p>
            </div>
          </div>

          {/* Card 2: Condiciones & Interactive triggers */}
          <div className="bg-sand/15 border border-gold/15 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-[9px] uppercase tracking-widest text-sage font-bold block mb-1">Capacidad Logística</span>
              <h4 className="font-serif text-base text-deep-cocoa font-medium">Condiciones de Reserva:</h4>
              <p className="font-sans text-xs text-cocoa/75 mt-1">
                Para garantizar la viabilidad y personalización, manejamos un aforo estricto por sesión:
              </p>
              <div className="flex gap-4 mt-3">
                <div className="bg-ivory border border-gold/10 px-4 py-2 rounded-xl flex-1 text-center shadow-xs">
                  <span className="text-[10px] text-sage font-sans uppercase block">Mínimo</span>
                  <span className="text-lg font-serif font-bold text-deep-cocoa">4 Personas</span>
                </div>
                <div className="bg-ivory border border-gold/10 px-4 py-2 rounded-xl flex-1 text-center shadow-xs">
                  <span className="text-[10px] text-sage font-sans uppercase block">Máximo</span>
                  <span className="text-lg font-serif font-bold text-deep-cocoa">8 Personas</span>
                </div>
              </div>
            </div>

            {/* Document Placeholders buttons */}
            <div className="border-t border-gold/15 pt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              <button
                onClick={() => setShowPdfModal(true)}
                className="py-3 px-4 rounded-xl border border-gold/30 hover:border-gold hover:bg-gold/5 text-deep-cocoa text-xs font-sans font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
              >
                <FileText className="h-4 w-4 text-gold" />
                <span>Propuesta Financiera (PDF)</span>
              </button>

              <button
                onClick={() => setShowViabilityModal(true)}
                className="py-3 px-4 rounded-xl border border-gold/30 hover:border-gold hover:bg-gold/5 text-deep-cocoa text-xs font-sans font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
              >
                <ShieldAlert className="h-4 w-4 text-gold" />
                <span>Viabilidad Técnica</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* ============================================================== */}
      {/* RESERVATION MODAL */}
      {/* ============================================================== */}
      <AnimatePresence>
        {showBookingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-cocoa/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-ivory border border-gold/30 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={resetBookingForm}
                className="absolute top-4 right-4 text-sage hover:text-deep-cocoa transition-colors p-1"
              >
                <X className="h-5 w-5" />
              </button>

              {bookingStep === 1 ? (
                /* Step 1: Form */
                <form onSubmit={handleBookingSubmit} className="p-6 md:p-8 space-y-5">
                  <div className="text-center pb-4 border-b border-gold/15">
                    <span className="text-[9px] uppercase tracking-widest text-gold font-bold">Reserva de Experiencia</span>
                    <h3 className="font-serif text-2xl font-light text-deep-cocoa mt-1">Solicitud de Cupo</h3>
                  </div>

                  <div className="space-y-4 py-2">
                    {/* Name */}
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-sage font-medium block mb-1">Nombre Completo</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Carolina Mendoza"
                        className="w-full px-4 py-2.5 rounded-xl border border-gold/15 focus:outline-none focus:border-gold bg-sand/5 text-sm font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-sage font-medium block mb-1">Correo Electrónico</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ej. carolina@correo.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gold/15 focus:outline-none focus:border-gold bg-sand/5 text-sm font-sans"
                      />
                    </div>

                    {/* Date and Guests Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-sage font-medium block mb-1">Fecha Deseada</label>
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl border border-gold/15 focus:outline-none focus:border-gold bg-sand/5 text-xs font-sans"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-sage font-medium block mb-1">Número de Pax</label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(parseInt(e.target.value))}
                          className="w-full px-3 py-2.5 rounded-xl border border-gold/15 focus:outline-none focus:border-gold bg-sand/5 text-xs font-sans"
                        >
                          <option value="4">4 Personas (Mín.)</option>
                          <option value="5">5 Personas</option>
                          <option value="6">6 Personas</option>
                          <option value="7">7 Personas</option>
                          <option value="8">8 Personas (Máx.)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button
                      type="button"
                      onClick={resetBookingForm}
                      className="flex-1 py-3 rounded-xl border border-gold/15 hover:border-gold text-xs font-sans font-semibold tracking-wider text-cocoa transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-gold hover:bg-gold-hover text-deep-cocoa text-xs font-sans font-semibold tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Solicitar Reserva</span>
                      <Send className="h-3 w-3" />
                    </button>
                  </div>
                </form>
              ) : (
                /* Step 2: Success Message */
                <div className="p-8 text-center space-y-6">
                  <div className="h-16 w-16 bg-gold/10 rounded-full border border-gold flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8 text-gold" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-light text-deep-cocoa">¡Solicitud Registrada!</h4>
                    <p className="font-sans text-xs text-cocoa/75 max-w-sm mx-auto leading-relaxed font-light">
                      Apreciado/a <strong className="text-deep-cocoa">{name}</strong>, hemos registrado tu solicitud para el ritual de <strong className="text-deep-cocoa">{guests} pax</strong> el día <strong className="text-deep-cocoa">{date}</strong>. 
                    </p>
                    <p className="font-sans text-xs text-sage leading-relaxed max-w-sm mx-auto pt-2">
                      Nos pondremos en contacto a la brevedad a tu correo (<span className="underline">{email}</span>) para coordinar el despacho del Kit Previo "Aroma del Monte" y validar la viabilidad climática en San Jacinto.
                    </p>
                  </div>

                  <button
                    onClick={resetBookingForm}
                    className="w-full py-3 rounded-xl bg-deep-cocoa hover:bg-deep-cocoa/90 text-ivory text-xs font-sans font-semibold tracking-wider transition-all"
                  >
                    Entendido
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ============================================================== */}
      {/* PROPUESTA FINANCIERA (PDF MODAL INTERACTIVE SIMULATOR) */}
      {/* ============================================================== */}
      <AnimatePresence>
        {showPdfModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-cocoa/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-ivory border border-gold/30 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setShowPdfModal(false)}
                className="absolute top-4 right-4 text-sage hover:text-deep-cocoa transition-colors p-1"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-6 md:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                <div className="text-center pb-4 border-b border-gold/15">
                  <span className="text-[9px] uppercase tracking-widest text-gold font-bold">Documento de Viabilidad Financiera</span>
                  <h3 className="font-serif text-2xl font-light text-deep-cocoa mt-1">Estructura de Costos del Ritual</h3>
                </div>

                <div className="space-y-4 text-xs font-sans font-light text-cocoa/85 leading-relaxed">
                  <p>
                    Este simulador representa el informe completo de la propuesta comercial que se despacha para grupos cerrados de turismo corporativo o familiar.
                  </p>
                  
                  {/* Detailed Table */}
                  <div className="border border-gold/15 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-sand/15 p-3 font-serif font-semibold text-deep-cocoa grid grid-cols-3 border-b border-gold/15">
                      <span>Concepto</span>
                      <span className="text-center">Porcentaje %</span>
                      <span className="text-right">Destinación Directa</span>
                    </div>
                    <div className="divide-y divide-gold/10">
                      {[
                        { conc: "Compensación Recolectores", pct: "35%", dest: "Sueldos directos en finca" },
                        { conc: "Implementos del Ritual", pct: "20%", dest: "Molinillo, gamella, delantal" },
                        { conc: "Kit Sensorial Previo", pct: "15%", dest: "Deshidratado y logística hotel" },
                        { conc: "Fondo de Desarrollo de Patios", pct: "15%", dest: "Proyectos locales forestales" },
                        { conc: "Servicios del Sommelier/Guía", pct: "15%", dest: "Turismo comunitario local" }
                      ].map((row, idx) => (
                        <div key={idx} className="p-3 grid grid-cols-3">
                          <span className="font-medium text-deep-cocoa">{row.conc}</span>
                          <span className="text-center font-serif">{row.pct}</span>
                          <span className="text-right text-[10px] text-sage">{row.dest}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gold/5 p-4 rounded-xl border border-gold/20">
                    <h5 className="font-serif text-xs font-semibold text-deep-cocoa mb-1">Políticas de Cancelación</h5>
                    <p className="text-[10px] text-cocoa/70">
                      Debido a que el **Kit Sensorial Previo** y los implementos artesanales son personalizados y producidos bajo demanda por maestros ebanistas de San Jacinto, las cancelaciones deben realizarse con **72 horas de antelación**. Se descontará el 20% del valor por concepto de personalización.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setShowPdfModal(false)}
                    className="w-full py-3 rounded-xl bg-deep-cocoa hover:bg-deep-cocoa/90 text-ivory text-xs font-sans font-semibold tracking-wider transition-all"
                  >
                    Cerrar Vista Previa
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ============================================================== */}
      {/* INFORME DE VIABILIDAD TÉCNICA MODAL */}
      {/* ============================================================== */}
      <AnimatePresence>
        {showViabilityModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-cocoa/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-ivory border border-gold/30 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setShowViabilityModal(false)}
                className="absolute top-4 right-4 text-sage hover:text-deep-cocoa transition-colors p-1"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-6 md:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                <div className="text-center pb-4 border-b border-gold/15">
                  <span className="text-[9px] uppercase tracking-widest text-gold font-bold">Matriz de Blindaje Operativo</span>
                  <h3 className="font-serif text-2xl font-light text-deep-cocoa mt-1">Viabilidad Técnica y Seguridad</h3>
                </div>

                <div className="space-y-4 text-xs font-sans font-light text-cocoa/85 leading-relaxed">
                  <p>
                    Nuestros protocolos garantizan la integridad de la experiencia cultural y la seguridad biológica y climática de todos los participantes.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Item 1 */}
                    <div className="bg-sand/10 p-4 rounded-xl border border-gold/10">
                      <h4 className="font-serif text-xs font-semibold text-deep-cocoa mb-1 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 bg-gold rounded-full" />
                        Control Sanitario del Fermento
                      </h4>
                      <p className="text-[10px] text-cocoa/70 mt-1 leading-relaxed">
                        La guama rabo de mono es procesada en sombra con envases esterilizados. El batido artesanal se realiza con molinillo curado que evita mohos, controlando la acidez en rangos de seguridad digestiva.
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-sand/10 p-4 rounded-xl border border-gold/10">
                      <h4 className="font-serif text-xs font-semibold text-deep-cocoa mb-1 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 bg-gold rounded-full" />
                        Variables Climatológicas
                      </h4>
                      <p className="text-[10px] text-cocoa/70 mt-1 leading-relaxed">
                        Montes de María cuenta con climas cálidos y húmedos. La sesión se realiza en patios arbolados con corrientes de brisa natural. Contamos con estaciones de hidratación de agua infusionada fría.
                      </p>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-sand/10 p-4 rounded-xl border border-gold/10">
                      <h4 className="font-serif text-xs font-semibold text-deep-cocoa mb-1 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 bg-gold rounded-full" />
                        Alergias Alimentarias
                      </h4>
                      <p className="text-[10px] text-cocoa/70 mt-1 leading-relaxed">
                        El arilo de guama es hipoalergénico por naturaleza. No obstante, al realizarse la fermentación y maridaje con flores locales de acacia, se indaga con anticipación alergias al polen o frutos secos.
                      </p>
                    </div>

                    {/* Item 4 */}
                    <div className="bg-sand/10 p-4 rounded-xl border border-gold/10">
                      <h4 className="font-serif text-xs font-semibold text-deep-cocoa mb-1 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 bg-gold rounded-full" />
                        Infraestructura Médica
                      </h4>
                      <p className="text-[10px] text-cocoa/70 mt-1 leading-relaxed">
                        El operador cuenta con botiquín especializado de trauma térmico, desfibrilador portátil (DEA) y personal certificado en primeros auxilios en áreas rurales remotas de Bolívar.
                      </p>
                    </div>

                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setShowViabilityModal(false)}
                    className="w-full py-3 rounded-xl bg-deep-cocoa hover:bg-deep-cocoa/90 text-ivory text-xs font-sans font-semibold tracking-wider transition-all"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
