import { states } from "../data/states";
import { AdressProps } from "../interfaces/interfaces";

export const Adress: React.FC<AdressProps> = ({
  setStreet,
  setCity,
  setSelectState,
  allDepartement,
  setDepartements,
}) => {
  return (
    <>
      <fieldset className="adress">
        <legend>Address</legend>
        <label htmlFor="street">Street</label>
        <input id="street" onChange={(e) => setStreet(e.target.value)}></input>
        <label htmlFor="city">City</label>
        <input id="city" onChange={(e) => setCity(e.target.value)}></input>
        <label htmlFor="state">State</label>
        <select
          name="state"
          id="state"
          onChange={(e) => setSelectState(e.target.value)}
        >
          {states.map((state, index) => (
            <option key={index}>{state.name}</option>
          ))}
        </select>
        <label htmlFor="zip-code">zip code</label>
        <input id="zip-code" type="number" />
      </fieldset>
      <label htmlFor="departement">departement</label>
      <select
        name="departement"
        id="departement"
        onChange={(e) => setDepartements(e.target.value)}
      >
        {allDepartement.map((oneDepartement, index) => (
          <option key={index}>{oneDepartement}</option>
        ))}
      </select>
    </>
  );
};
