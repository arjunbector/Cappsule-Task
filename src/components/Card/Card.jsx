import NotAvailable from "./NotAvailable";
import Capsule from "../ui/Capsule";
import Pricing from "./Pricing";

const Card = () => {
  return (
    <div className="flex items-center justify-between custom-shadow rounded-lg p-6 bg-gradient-to-r from-white to-primary-aqua to-[450%]">
      <div className="flex flex-col gap-6 w-1/3 text-sm">
        <div className="flex gap-4">
          <div>Form:</div>
          <div>
            <Capsule variant="primary">Tablet</Capsule>
            <Capsule variant="selected">Capsule</Capsule>
            <Capsule variant="dashed">Syrup</Capsule>
          </div>
        </div>
        <div className="flex gap-4">
          <div>Form:</div>
          <div>
            <Capsule variant="primary">Tablet</Capsule>
            <Capsule variant="selected">Capsule</Capsule>
            <Capsule variant="dashed">Syrup</Capsule>
          </div>
        </div>
        <div className="flex gap-4">
          <div>Form:</div>
          <div>
            <Capsule variant="primary">Tablet</Capsule>
            <Capsule variant="selected">Capsule</Capsule>
            <Capsule variant="dashed">Syrup</Capsule>
          </div>
        </div>
      </div>
      <div className="w-1/3 text-center">
        <h1 className="font-bold">Salt A</h1>
        <p className="text-slate-600">Tablet | 100mg | 5 strips</p>
      </div>
      <div className="flex w-1/3 justify-center">
        {/* <NotAvailable/> */}
        <Pricing price={80}/>
      </div>
    </div>
  );
};

export default Card;
