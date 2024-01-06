import { updateOrder } from '../../services/apiRestaurant.js';
import Button from '../../ui/Button.jsx';
import { useFetcher } from 'react-router-dom';

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const changedData = { priority: true };

  await updateOrder(params.orderId, changedData);

  return null;
}

export default UpdateOrder;
