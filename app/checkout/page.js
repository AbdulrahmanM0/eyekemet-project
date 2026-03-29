import Checkout from '@/_ui/checkout/Checkout';
import { getSessionToken } from '@/api/authinticated';
import handleAllAddress from '@/api/proflie/AllAddress';
import handleOrders from '@/api/proflie/Orders';

async function Product({ searchParams }) {
  const sessionPromise = getSessionToken();
  const ordersPromise = handleOrders({ path: "get-customer-orders" });
  const addressPromise = handleAllAddress({ method: "get" });

  const [{ customer }, ordersData, addressData] = await Promise.all([
    sessionPromise,
    ordersPromise,
    addressPromise
  ]);

  const alladdress = addressData?.data || [];
  const orders = ordersData || [];
  const extraction_id = searchParams?.extraction_id || null;

  let customerObj = {};
  try {
    customerObj = customer?.value ? JSON.parse(customer.value) : {};
  } catch (err) {
    console.error("Failed:", err);
  }

  return (
    <div>
      <Checkout
        customer={customerObj}
        getorders={orders}
        extraction_id={extraction_id}
        alladdress={alladdress}
      />
    </div>
  );
}

export default Product;