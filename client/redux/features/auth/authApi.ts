import { apiSlice } from "@/redux/features/api/apiSlice";
import { userRegistration } from "@/redux/features/auth/authSlice";

type RegistrationResponse = {
  message: string;
  activationToken: string;
};

type RegistrationData = {};

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // first endpoint here
    register: builder.mutation<RegistrationResponse, RegistrationData>({
      query: (data) => ({
        url: "registration",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              token: result.data.activationToken,
            }),
          );
        } catch (error: any) {
          console.log(error.message);
        }
      },
    }),

    // second endpoint here
    activation: builder.mutation({
      query: ({ activation_token, activation_code }) => ({
        url: "activate-user",
        method: "POST",
        body: { activation_code, activation_token },
      }),
    }),
  }),
});

export const { useRegisterMutation, useActivationMutation } = authApi;
