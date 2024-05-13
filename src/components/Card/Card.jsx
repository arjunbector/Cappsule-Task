import { motion } from "framer-motion";
import NotAvailable from "./NotAvailable";
import Capsule from "../ui/Capsule";
import Pricing from "./Pricing";
import { useState } from "react";
import { useEffect } from "react";
import calculatePrice from "../../utils/calculatePrice";

const Card = ({ salt }) => {
  const [selectedForm, setSelctedForm] = useState(Object.keys(salt.salt_forms_json)[0]);
  const [selectedStrength, setSelctedStrength] = useState(
    Object.keys(salt.salt_forms_json[selectedForm])[0]
  );
  const [selectedPacking, setSelectedPacking] = useState(
    Object.keys(salt.salt_forms_json[selectedForm][selectedStrength])[0]
  );

  const [availableForms, setAvailableForms] = useState(salt.available_forms);
  const [availableStrengths, setAvailableStrengths] = useState([]);
  const [availablePackaging, setAvailablePackaging] = useState([]);

  useEffect(() => {
    const availableStrengths = [];
    for (let i in salt.salt_forms_json[selectedForm]) {
      availableStrengths.push(i);
    }
    setAvailableStrengths(availableStrengths);

    const availablePackaging = [];
    for (let i in salt.salt_forms_json[selectedForm][selectedStrength]) {
      availablePackaging.push(i);
    }
    setAvailablePackaging(availablePackaging);
  }, [selectedForm, selectedStrength, selectedPacking]);

  const forms = availableForms.map((form) => (
    <Capsule
      key={form}
      variant={selectedForm === form ? "primary" : "selected"}
      text={form}
      onClick={() => {
        setSelctedForm(form);
      }}
    />
  ));
  const strengths = availableStrengths.map((strength) => (
    <Capsule
      key={strength}
      variant={selectedStrength === strength ? "primary" : "selected"}
      text={strength}
      onClick={() => {
        setSelctedStrength(strength);
      }}
    />
  ));
  const packagings = availablePackaging.map((packaging) => (
    <Capsule
      key={packaging}
      variant={packaging === selectedPacking ? "primary" : "selected"}
      text={packaging}
      onClick={() => {
        setSelectedPacking(packaging);
      }}
    />
  ));
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      className="flex items-center justify-between custom-shadow rounded-lg p-6 bg-gradient-to-r from-white to-primary-aqua to-[450%]"
    >
      <div className="flex flex-col gap-5 w-1/3 text-sm">
        <div className="flex gap-4">
          <div>Form:</div>
          <div className="flex flex-wrap gap-1">{forms}</div>
        </div>
        <div className="flex gap-4">
          <div>Strength:</div>
          <div className="flex flex-wrap gap-1">{strengths}</div>
        </div>
        <div className="flex gap-4">
          <div>Packaging:</div>
          <div className="flex flex-wrap gap-1">{packagings}</div>
        </div>
      </div>
      <div className="w-1/3 text-center">
        <h1 className="font-bold">{salt.salt}</h1>
        <p className="text-slate-600">
          {selectedForm} | {selectedStrength} | {selectedPacking}
        </p>
      </div>
      <div className="flex w-1/3 justify-center">
        {/* <NotAvailable/> */}
        <Pricing
          price={calculatePrice(
            salt.salt_forms_json[selectedForm][selectedStrength][
              selectedPacking
            ]
          )}
        />
      </div>
    </motion.div>
  );
};

export default Card;
