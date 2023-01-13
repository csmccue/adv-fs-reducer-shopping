import { useContext } from "react";


export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  
  
  return <section>
    <h1>My Shopping List</h1>
  </section>;
}
