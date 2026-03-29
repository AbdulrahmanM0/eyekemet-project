import dynamic from "next/dynamic";
import Loading from "@/app/loading"

const FormProvider = dynamic(() => import('./utilies/forms/FormProvider'), {
  ssr: false,
  loading: () => (
    <div >
      <Loading />
    </div>
  )
});

function Checkout({ getorders, extraction_id, customer, alladdress }) {
  const { name, email, phone } = customer;
  return (
    <section>
      <FormProvider
        name={name}
        email={email}
        phone={phone}
        alladdress={alladdress}
        extraction_id={extraction_id}
        getorders={getorders}
        customer={customer}
      />
    </section>
  )
}

export default Checkout;