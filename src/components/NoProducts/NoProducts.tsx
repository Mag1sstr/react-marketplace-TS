import { useNavigate } from "react-router-dom";

export default function NoProducts() {
  const navigate = useNavigate();
  return (
    <div className="conteiner">
      <h1 style={{ fontFamily: "Inter", fontSize: 72, marginBottom: 60 }}>
        Oops... There are currently no products in this category :{"("}
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "20px 50px",
            fontSize: 28,
            background: "#EBEBEB",
            border: "none",
            borderRadius: 100,
            cursor: "pointer",
          }}
        >
          {"<"} Go back
        </button>
      </div>
    </div>
  );
}
