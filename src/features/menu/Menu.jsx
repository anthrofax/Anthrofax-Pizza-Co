import { getMenu } from "../../services/apiRestaurant.js";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem.jsx";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((item) => (
        <MenuItem pizza={item} key={item.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
