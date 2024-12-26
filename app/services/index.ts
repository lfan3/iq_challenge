import axios from "@/lib/axios";

export const signUpService = async (data) => {
  try {
    const response = await axios.post(`/signup`, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const verifyAuth = async () => {
  try {
    const response = await axios.post("/verifyAuth");
    return response;
  } catch (error) {
    throw error;
  }
};

export const loginService = async (data) => {
  try {
    const response = await axios.post("/login", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const logoutService = async () => {
  try {
    const response = await axios.post("/logout");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAnswerService = async (id: number) => {
  try {
    const response = await axios.get(`/answers/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const storeAnswerService = async (data: {
  userId: string;
  questionId: string;
  answer: any;
}) => {
  try {
    const response = await axios.get(`/storeAnswer`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateQuestionsInUserService = async (data: {
  userId: string;
  questionId: number | string;
}) => {
  try {
    const response = await axios.put(`/updateUserQuestion`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePasswordService = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.put(`/updatePassword`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAnswerService = async (data: {
  content: any;
  userId: number;
  questionId: number;
}) => {
  try {
    const response = await axios.post(`/updateAnswer`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get the user saved answer
export const getGridParticalAnswerService = async (data:{
  userId: number;
  questionId: number;
}) => {
  try {
    const response = await axios.get(
      `/gridPartialAnswer`,
      {
        params: {
          userId: data?.userId || "",
          questionId: data?.questionId || "",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
