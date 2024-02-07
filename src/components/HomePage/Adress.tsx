import { states } from "../../data/states";
import { AdressProps } from "../../interfaces/interfaces";
import { Select } from "../Select/Select";

export const Adress: React.FunctionComponent<AdressProps> = ({
  handleAdressInputChange,
  handleAdressSelectChange,
  allDepartement,
}) => {
  return (
    <>
      <fieldset className="adress">
        <legend>Address</legend>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          onChange={(e) => handleAdressInputChange(e)}
        ></input>
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          onChange={(e) => handleAdressInputChange(e)}
        ></input>
        <label htmlFor="state">State</label>
        <Select
          name={"state"}
          id={"state"}
          handleAdressChange={(e) => handleAdressSelectChange(e)}
          selectChoice={states}
        />
        <label htmlFor="zip-code">zip code</label>
        <input
          id="zip-code"
          name="zipCode"
          type="number"
          onChange={(e) => handleAdressInputChange(e)}
        />
      </fieldset>
      <label htmlFor="departements">departement</label>
      <Select
        name={"departements"}
        id={"departements"}
        handleAdressChange={(e) => handleAdressSelectChange(e)}
        selectChoice={allDepartement}
      />
    </>
  );
};
