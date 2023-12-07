import { states } from "../data/states";
import { AdressProps } from "../interfaces/interfaces";

export const Adress: React.FunctionComponent<AdressProps> = ({
  handleAdressChange,
  employee,
  allDepartement,
}) => {
  // console.log(employee);
  return (
    <>
      <fieldset className="adress">
        <legend>Address</legend>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          onChange={(e) => handleAdressChange(e)}
        ></input>
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          onChange={(e) => handleAdressChange(e)}
        ></input>
        <label htmlFor="state">State</label>
        <select
          name="state"
          id="state"
          onChange={(e) => {
            handleAdressChange(e);
          }}
        >
          {states.map((state, index) => (
            <option key={index}>{state.name}</option>
          ))}
        </select>
        <label htmlFor="zip-code">zip code</label>
        <input
          id="zip-code"
          name="zipCode"
          type="number"
          onChange={(e) => handleAdressChange(e)}
        />
      </fieldset>
      <label htmlFor="departements">departement</label>
      <select
        name="departements"
        id="departements"
        onChange={(e) => {
          handleAdressChange(e);
        }}
      >
        {allDepartement.map((oneDepartement, index) => (
          <option key={index}>{oneDepartement}</option>
        ))}
      </select>
    </>
  );
};
