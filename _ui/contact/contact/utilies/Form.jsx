"use client"

import useContactForm from "../../hooks/UseContact";

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

export default function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } = useContactForm();

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 gap-clamp-40'>
      <div className="sm:col-span-2 flex flex-col gap-clamp-24">
        <p className="text-clamp-18 text-gray200 leading-none">Contact Form</p>
        <h3 className='text-clamp-18 text-light400 leading-none'>Do you have any questions?</h3>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-clamp-24 w-[clamp(320px,50vw,850px)] 3xl:w-[clamp(320px,44.27vw,850px)]"
      >
        <div>
          <input
            {...register("name")}
            className='input'
            placeholder='Enter Full Name *'
            type="text"
          />
          <ErrorMsg message={errors.name?.message} />
        </div>

        <div>
          <input
            {...register("email")}
            className='input'
            placeholder='Enter email *'
            type="email"
          />
          <ErrorMsg message={errors.email?.message} />
        </div>

        <div>
          <input
            {...register("phone")}
            className='input'
            placeholder='Enter mobile number *'
            type="tel"
          />
          <ErrorMsg message={errors.phone?.message} />
        </div>

        <div>
          <input
            {...register("subject")}
            className='input'
            placeholder='Subject *'
            type="text"
          />
          <ErrorMsg message={errors.subject?.message} />
        </div>

        <div className="col-span-2">
          <textarea
            {...register("message")}
            className='input'
            placeholder="Enter your message *"
            rows={5}
          ></textarea>
          <ErrorMsg message={errors.message?.message} />
        </div>

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