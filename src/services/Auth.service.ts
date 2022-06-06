import apiClient from "./axios";

const EndPoints = {
    signup: `/user/create`,
    login: "/user/login"
};

type LoginType = {
    email: string
    password: string
}

type SignupType = {
    email: string
    userType: string
    fullName: string
    password: string
}

export const create = async (payload: SignupType) => {
    const res = await apiClient.post(EndPoints.signup, payload);
    return res;
};

export const logIn = async (payload: LoginType) => {
    const res = await apiClient.post(EndPoints.login, payload);
    return res;
};