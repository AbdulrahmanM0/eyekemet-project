"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Error message component
function ErrorMsg({ message }) {
  if (!message) return null;
  return (
    <p className="text-red100 text-clamp-12 mt-1 flex items-center gap-1 animate-[slideDown_0.25s_ease-out] [@keyframes_slideDown]{0%{transform:translateY(-10px);opacity:0}100%{transform:translateY(0);opacity:1}}">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8S2 14.418 2 10 5.582 2 10 2s8 3.582 8 8zm-8-3a1 1 0 00-1 1v2a1 1 0 002 0V8a1 1 0 00-1-1zm0 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
      {message}
    </p>
  );
}

// Custom hook for dynamic contact form
function useContactForm(contactForm) {
  // Build Zod schema dynamically
  const schemaShape = {};
  contactForm?.forEach((field) => {
    let validator = z.string();
    if (field.is_required) validator = validator.min(1, `${field.placeholder} is required`);
    if (field.field_type === "email") validator = validator.email("Invalid email address");
    if (field.field_type === "phone") validator = validator.regex(/^\+?\d+$/, "Invalid phone number");
    schemaShape[field.id] = validator;
  });

  const schema = z.object(schemaShape);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // You can call your API here
  };

  return { register, handleSubmit, errors, isSubmitting, onSubmit };
}

// Main ContactForm component
export default function ContactForm({ contactForm }) {
  const sortedForm = [...(contactForm || [])].sort((a, b) => a.sort_order - b.sort_order);

  const { register, handleSubmit, errors, isSubmitting, onSubmit } = useContactForm(contactForm);

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 gap-clamp-40'>
      {/* Form header */}
      <div className="sm:col-span-2 flex flex-col gap-clamp-24">
        <p className="text-clamp-18 text-gray200 leading-none">
          Contact Form
        </p>
        <h3 className='text-clamp-18 text-light400 leading-none'>
          Do you have any questions?
        </h3>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-clamp-24"
      >
        {sortedForm?.map((item, index) => {
          const isLast = index === sortedForm.length - 1;

          return (
            <div key={item.id} className={isLast ? "sm:col-span-2" : ""}>
              {item.field_type === "textarea" && (
                <div className="flex flex-col gap-1">
                  <textarea
                    {...register(item.id)}
                    className="input w-full"
                    placeholder={`${item.placeholder}${item.is_required ? " *" : ""}`}
                  />
                  <ErrorMsg message={errors[item.id]?.message} />
                </div>
              )}

              {item.field_type === "select" && (
                <div className="flex flex-col gap-1">
                  <select {...register(item.id)} className="input w-full">
                    <option value="">
                      {item.placeholder}{item.is_required && " *"}
                    </option>
                    {item.options?.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ErrorMsg message={errors[item.id]?.message} />
                </div>
              )}

              {!["textarea", "select"].includes(item.field_type) && (
                <div className="flex flex-col gap-1">
                  <input
                    {...register(item.id)}
                    className="input w-full"
                    placeholder={`${item.placeholder}${item.is_required ? " *" : ""}`}
                    type={item.field_type === "phone" ? "tel" : item.field_type}
                  />
                  <ErrorMsg message={errors[item.id]?.message} />
                </div>
              )}
            </div>
          );
        })}

        {/* Submit button */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            className='secondary-btn whitespace-nowrap shrink-0 !w-fit'
            disabled={isSubmitting}
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}