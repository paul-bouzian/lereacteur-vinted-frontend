import { useState } from "react";
import { Range } from "react-range";

function PriceFilter({ prices, setPrices }) {
  const [values, setValues] = useState([prices[0], prices[1]]);
  const handleFinalChanges = (values) => {
    setPrices(values);
  };

  return (
    <div className="flex max-w-[45vw] flex-1 flex-col items-center gap-2 md:flex-row md:gap-8">
      <p className="flex-1 whitespace-nowrap">
        Prix entre : {values[0]}€ et {values[1]}€
      </p>
      <Range
        step={1}
        min={0}
        max={500}
        values={values}
        onChange={(values) => setValues(values)}
        onFinalChange={handleFinalChanges}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#ccc",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                backgroundColor: "#0E766E",
                left: `${(values[0] / 500) * 100}%`,
                width: `${((values[1] - values[0]) / 500) * 100}%`,
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: "#0E766E",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
              borderRadius: "50%",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: "#0E766E",
              }}
            />
          </div>
        )}
      />
    </div>
  );
}

export default PriceFilter;
