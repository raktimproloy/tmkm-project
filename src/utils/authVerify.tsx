import jwt_decode from "jwt-decode";

interface DecodedToken {
  exp: number;
  userId: string;
  fullName: string;
  email: string;
  userType: string
}

function decodeToken(token: any): DecodedToken | null {
  try {
    return jwt_decode<DecodedToken>(token);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}

function AuthVerification() {
  const token = localStorage.getItem("_token");
  if (!token) {
    return {
      isExp: false,
      userId: "",
      fullName: "",
      email: "",
      userType: ""
    };
  }
  const decodedToken = decodeToken(token);
  if (!decodedToken || decodedToken.exp * 1000 < Date.now()) {
    return {
      isExp: false,
      userId: "",
      fullName: "",
      email: "",
      userType: ""
    };
  }

  localStorage.setItem('userId', decodedToken.userId);
  localStorage.setItem('fullName', decodedToken.fullName);
  localStorage.setItem('email', decodedToken.email);
  localStorage.setItem('userType', decodedToken.userType);

  return {
    isExp: true,
    userId: decodedToken.userId,
    fullName: decodedToken.fullName,
    email: decodedToken.email,
    userType: decodedToken.userType


  };
}

export default AuthVerification;
