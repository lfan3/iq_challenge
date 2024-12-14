"use client";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
import {useState } from "react";
import { useRouter } from 'next/navigation';

import { updatePasswordService } from "../services";

export default function ResetPass() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [displayNotif, setdisplayNotif] = useState(false);
  const router = useRouter();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async() => {
    // password
    if (validate()) {
      await updatePasswordService(formData)
      setdisplayNotif(true)

      const timer = setTimeout(()=>{
        setdisplayNotif(false)
        router.push("/")
        clearTimeout(timer)
      }, 1000)
      
    } 
  };
  return (
    <div className="flex justify-center p-4 m-14">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Reset the password
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="email"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={onChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              New Password
            </Typography>
            <Input
              type="password"
              size="lg"
              name="password"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={onChange}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <Button className="mt-6" fullWidth onClick={onSubmit}>
            Reset
          </Button>
        </form>
      </Card>

      <Dialog open={displayNotif} onClose={() => setDisplayNotif(false)}>
      <DialogBackdrop className="fixed inset-0 bg-black/20" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 bg-blue-500 px-10 py-7 rounded-lg text-white text-lg font-bold">
          <p>Success. Please Login</p>
        </DialogPanel>
      </div>
      </Dialog>
    </div>
  );
}
