import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Loader2,
  CheckCircle2,
  Phone,
  Mail,
  User,
  ArrowRight,
} from "lucide-react";
import { projectInfo } from "../../data/siteData";
import { sendLead } from "../../services/leadService";
import Eyebrow from "./Eyebrow";

const schema = yup.object({
  name: yup.string().trim().required("Please share your name."),
  mobile: yup
    .string()
    .trim()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number.")
    .required("Mobile number is required."),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email address.")
    .optional(),
});

export default function LeadForm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [status, setStatus] = useState("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setStatus("submitting");

    try {
      await sendLead(data);
      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="lead-form"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-forest-950 via-[#082f25] to-forest-900 py-24"
    >
      {/* Decorative Blobs */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gold-300/10 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow dark>Book a Site Visit</Eyebrow>

          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            Discover Luxury Living
            <span className="block text-gold-300">
              Before You Invest.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">
            Experience the location, explore the amenities and understand the
            lifestyle firsthand. Our relationship manager will guide you through
            every detail during your personalized site visit.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-forest-950">
                <Phone size={24} />
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-white/50">
                  Call Directly
                </p>

                <a
                  href={`tel:${projectInfo.phone}`}
                  className="mt-1 block text-2xl font-semibold text-gold-300 transition hover:text-white"
                >
                  {projectInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gold-400/20 to-gold-300/5 blur-xl"></div>

          <div className="relative rounded-3xl border border-white/10 bg-white p-8 shadow-[0_35px_80px_rgba(0,0,0,0.35)] md:p-10">
            {status === "success" ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="text-green-600" size={42} />
                </div>

                <h3 className="mt-6 font-display text-3xl font-bold text-forest-950">
                  Thank You!
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-ink-900/70">
                  Your enquiry has been received successfully. Our property
                  expert will contact you shortly.
                </p>

                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 rounded-full border border-forest-900 px-6 py-3 font-medium transition hover:bg-forest-950 hover:text-white"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="font-display text-3xl font-bold text-forest-950">
                    Request a Callback
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Fill in your details and we'll connect with you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="space-y-6">
                    {/* NAME */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-forest-950">
                        Full Name
                      </label>

                      <div className="relative">
                        <User
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={18}
                        />

                        <input
                          {...register("name")}
                          placeholder="Your full name"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 outline-none transition focus:border-gold-400 focus:bg-white focus:ring-4 focus:ring-gold-200/40"
                        />
                      </div>

                      {errors.name && (
                        <p className="mt-2 text-xs text-red-600">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* MOBILE */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-forest-950">
                        Mobile Number
                      </label>

                      <div className="relative">
                        <Phone
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={18}
                        />

                        <input
                          type="tel"
                          {...register("mobile")}
                          placeholder="10-digit mobile number"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 outline-none transition focus:border-gold-400 focus:bg-white focus:ring-4 focus:ring-gold-200/40"
                        />
                      </div>

                      {errors.mobile && (
                        <p className="mt-2 text-xs text-red-600">
                          {errors.mobile.message}
                        </p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-forest-950">
                        Email
                        <span className="ml-1 text-gray-400">(Optional)</span>
                      </label>

                      <div className="relative">
                        <Mail
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={18}
                        />

                        <input
                          type="email"
                          {...register("email")}
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 outline-none transition focus:border-gold-400 focus:bg-white focus:ring-4 focus:ring-gold-200/40"
                        />
                      </div>

                      {errors.email && (
                        <p className="mt-2 text-xs text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
                        Something went wrong. Please try again or call us
                        directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-7 py-4 font-display text-base font-semibold text-forest-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request a Callback
                          <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}