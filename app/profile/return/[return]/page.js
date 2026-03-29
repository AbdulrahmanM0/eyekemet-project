
import OrderTracking from "@/_ui/profile/content/orderHstory/Details";
import ReturnOrder from "@/_ui/profile/content/orderHstory/Return";
import handleOrders from "@/api/proflie/Orders";

export default async function Profile({params}) {
  const getorder = await handleOrders({path: "get-customer-orders",params:`?order_id=${params?.return}`});
  const order = getorder?.orders[0];

  return (
    <ReturnOrder {...order}/> 
  );
}
