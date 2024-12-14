import {
  Description,
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
import { useEffect, useState } from "react";

export  function Info({message, icon="",showInfo, setShowInfo}) {

  useEffect(() => {
    const timer = setTimeout(()=>{
        setShowInfo(false)
    }, 2000)
    return ()=>{
        clearTimeout(timer)
    }
  }, [showInfo]);
  return (
    <Dialog
      open={showInfo}
      onClose={() => setShowInfo(false)}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white px-10 py-7 rounded-lg">
          {/* <Description className="flex items-baseline text-xl font-semibold text-gray-900">
      <p className="mx-2">Answer:</p>
    </Description> */}
          <div className="flex justify-end">
            <p>
                {icon}
            </p>
            <p>
            {message}
            </p>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
