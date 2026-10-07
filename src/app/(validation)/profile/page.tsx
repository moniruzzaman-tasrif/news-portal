"use client"

import { useSession } from "@/lid/auth-client";
import React from "react";

const ProfilePage = () => {

   const session = useSession();
   const user = session.data;

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        <div className="card-body items-center text-center">
          {/* Profile Image */}
          <div className="avatar online placeholder mb-2">
            <div className="bg-neutral text-neutral-content rounded-full w-24 ring ring-primary ring-offset-base-100 ring-offset-2">
              <span className="text-3xl font-bold">M</span>
            </div>
          </div>

          {/* Name & Role */}
          <h2 className="card-title text-2xl font-bold mt-2">Moniruzzaman</h2>
          <p className="text-sm text-base-content/60">Bangla News 24 Editor</p>

          <div className="divider w-full my-4"></div>

          {/* Settings Section */}
          <div className="w-full text-left space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-base-content/50 text-center">
              Account Settings
            </h3>

            {/* Change Username Static Block */}
            <div className="bg-base-200 p-4 rounded-box space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{user?.user.name}</span>
                <button
                  type="button"
                  className="btn btn-ghost btn-xs text-primary"
                >
                  Change
                </button>
              </div>
              <p className="text-sm text-base-content/70">Moniruzzaman</p>
            </div>

            {/* Push Notifications Toggle */}
            <div className="form-control bg-base-200 p-4 rounded-box flex-row items-center justify-between">
              <span className="text-sm font-medium">Push Notifications</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                defaultChecked
              />
            </div>

            {/* Dark Theme Toggle */}
            <div className="form-control bg-base-200 p-4 rounded-box flex-row items-center justify-between">
              <span className="text-sm font-medium">Dark Theme</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                defaultChecked
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="card-actions justify-center w-full mt-6">
            <button type="button" className="btn btn-primary w-full shadow-md">
              Save All Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
