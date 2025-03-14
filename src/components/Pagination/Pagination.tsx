import { useState } from "react";

interface IProps {
  totalPage: number;
  setCurrentPage: (num: number) => void;
}

export default function Pagination({ totalPage, setCurrentPage }: IProps) {
  const [main, setMain] = useState(1);

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        fontSize: 28,
        alignItems: "center",
        overflow: "auto",
      }}
    >
      {[...Array(totalPage)].map((_, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setMain(i + 1);
              setCurrentPage(i + 1);
            }}
            style={
              i + 1 === main
                ? {
                    cursor: "default",
                    background: "#1E90FF",
                    width: 35,
                    height: 35,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    color: "#fff",
                  }
                : { background: "none", color: "#000", cursor: "default" }
            }
          >
            {i + 1}
          </div>
        );
      })}
    </div>
  );
}
