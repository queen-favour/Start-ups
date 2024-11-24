import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

const PersonalProfile = () => {
  const navigate = useNavigate();
  const { user, updateProfile, logout } = useAuthStore();

  const methods = useForm({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phone: user?.phone || "",
      country: user?.country || "",
      gender: user?.gender || "",
      role: user?.role || "",
      skillLevel: user?.skillLevel || "",
    },
  });

  const { handleSubmit, formState: { isSubmitting }, register } = methods;

  const onSubmit = async (data) => {
    try {
      await updateProfile(data);
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  return (
    <div className="py-8 pl-8 pr-8">
      <div className="w-full  md:w-[60%] lg:w-[40%]">
        <div className="rounded-lg">
          <div className="pb-12">
            <h1 className="text-5xl  font-medium">Personal Information</h1>
            
          </div>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-6">
                <FormInput
                  name="firstName"
                  label="First Name"
                  placeholder="Enter your first name"
                  className="w-full border  border-white bg-transparent h-14 rounded-lg px-4"
                  validation={{
                    required: "First name is required",
                  }}
                />

                <FormInput
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter your last name"
                  className="w-full h-14 rounded-lg px-4 border border-white bg-transparent"
                  validation={{
                    required: "Last name is required",
                  }}
                />

                <FormInput
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 rounded-lg px-4 border border-white bg-transparent"
                  validation={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                />

                <FormInput
                  name="phone"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  className="w-full h-14 rounded-lg  px-4 border border-white bg-transparent"
                  validation={{
                    pattern: {
                      value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                      message: "Invalid phone number",
                    },
                  }}
                />

                <FormInput
                  name="country"
                  label="Country"
                  placeholder="Enter your country"
                  className="w-full h-14 rounded-lg px-4 border border-white bg-transparent"
                />

                <div className="space-y-1">
                  <label className="block text-sm font-medium">
                    Gender
                  </label>
                  <select
                    {...register("gender")}
                    className="w-full h-14 rounded-lg border border-white bg-transparent px-4 focus:border-gray-700 focus:ring-gray-500"
                  >
                    <option value="" className="bg-white text-black hover:bg-gray-400">Select Gender</option>
                    <option value="male" className="bg-white text-black hover:bg-gray-400">Male</option>
                    <option value="female" className="bg-white text-black hover:bg-gray-400">Female</option>
                    <option value="other" className="bg-white text-black hover:bg-gray-400">Other</option>
                  </select>
                </div>

                <FormInput
                  name="role"
                  label="Role"
                  placeholder="Enter your role"
                  className="w-full h-14 rounded-lg px-4 border border-white bg-transparent"
                />

                <div className="space-y-1">
                  <label className="block text-sm font-medium ">
                    Current Skill Level
                  </label>
                  <select
                    {...register("skillLevel")}
                    className="w-full h-14 rounded-lg border border-white bg-transparent px-4 focus:border-gray-700 focus:ring-gray-500"
                  >
                    <option value="" className="bg-white text-black hover:bg-gray-400">Select Skill Level</option>
                    <option value="beginner" className="bg-white text-black hover:bg-gray-400">Beginner</option>
                    <option value="intermediate" className="bg-white text-black hover:bg-gray-400">Mid Level</option>
                    <option value="advanced" className="bg-white text-black hover:bg-gray-400">Senior</option>
                  </select>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  text="Submit"
                  loading={isSubmitting}
                  loadingText="Submitting..."
                  className="w-full h-14 bg-white hover:bg-gray-400 text-black rounded-full font-medium"
                />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;