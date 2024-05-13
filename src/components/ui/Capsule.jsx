const Capsule = ({ variant, disabled, onClick, text }) => {
  return (
    <button
      disabled={disabled}
      className={`px-3 rounded-lg font-semibold text-sm
        ${
          variant === "primary" &&
          "bg-primary custom-shadow-capsule border border-black"
        }
        ${variant === "selected" && "border-2 border-slate-300"}
        ${
          variant === "dashed" && "bg-white border-2 border-dashed text-black"
        }`}
      onClick={onClick}
    >
      {text || "Dumy"}
    </button>
  );
};

export default Capsule;
