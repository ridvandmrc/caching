import { FC } from "react";

export const Comments: FC<{ body: string; email: string }> = ({
  body,
  email,
}) => {
  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "0.5rem",
        border: "1px solid gray",
        marginTop: "1rem",
        maxWidth: "500px",
      }}
    >
      <div>
        <b>Comments:</b> {body}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <b>E-mail:</b> {email}
      </div>
    </div>
  );
};
