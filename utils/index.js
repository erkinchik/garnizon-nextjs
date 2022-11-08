export const token =
  typeof window !== "undefined" && localStorage.getItem("token");

export const user =
  typeof window !== "undefined" && localStorage.getItem("user");
