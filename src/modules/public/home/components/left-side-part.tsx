import AuthBg from "@/assets/images/backgrounds/login-security.svg?react";

export function LeftSidebarPart() {
  return (
    <div className="relative z-10 flex h-screen items-center justify-center">
      <div className="px-6 lg:w-10/12 xl:w-5/12 xl:px-0">
        <AuthBg className="w-full" />
      </div>
    </div>
  );
}
