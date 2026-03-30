import Checkout from '@/_ui/checkout/Checkout';
import { getSessionToken } from '@/api/authinticated';
import { handleExtraction, handleListExtraction } from '@/api/cart/extraction';
import { handleListOrders } from '@/api/cart/orders';
import handleAllAddress from '@/api/proflie/AllAddress';
import handleOrders from '@/api/proflie/Orders';

async function Product({ searchParams }) {
  const extraction_id = searchParams?.extraction_id || null;
  const sessionPromise = getSessionToken();
  const ordersPromise = handleOrders({ path: "get-orders" });
  const addressPromise = handleAllAddress({ method: "get" });
  const extractionPromise = extraction_id
    ? handleExtraction({ data: { extraction_id } })
    : Promise.resolve(null);
  const extractionListPromise = handleListExtraction();

  const [
    { customer },
    ordersData,
    addressData,
    extractionData,
    extractionListData 
  ] = await Promise.all([
    sessionPromise,
    ordersPromise,
    addressPromise,
    extractionPromise,
    extractionListPromise
  ]);

  const alladdress = addressData?.data || [];
  const orders = ordersData || [];
  const extraction = extractionData?.extraction || null;
  const extractionList = extractionListData?.data || []; 

  let customerObj = {};
  try {
    customerObj = customer?.value ? JSON.parse(customer.value) : {};
  } catch (err) {
    console.error("Failed to parse customer:", err);
  }

  return (
    <div>
      <Checkout
        customer={customerObj}
        getorders={orders}
        extraction_id={extraction_id}
        extraction={extraction}
        extractionList={extractionList} 
        alladdress={alladdress}
      />
    </div>
  );
}

export default Product;