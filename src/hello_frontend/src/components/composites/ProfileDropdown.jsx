import { ChevronDown, Copy, LogOut, UserRound } from "lucide-react";
import { useAuth } from "~/contexts/AuthContext";

const ProfileDropdown = () => {
    const { identity, logout } = useAuth();

    const copyPrincipal = () => {
        if (identity?.getPrincipal()) {
            navigator.clipboard.writeText(identity?.getPrincipal().toString());
        }
    };

    return (
        <div className="dropdown dropdown-center">
            <button
                tabIndex={0}
                className="flex items-center space-x-2.5 rounded-full p-2 transition-colors hover:bg-zinc-700"
            >
                <div className="grid place-items-center rounded-full bg-blue-100 p-2">
                    <UserRound className="size-5 text-blue-600" />
                </div>
                <div className="text-left [&>span]:block">
                    <span className="max-w-[160px] truncate font-medium text-sm">
                        {identity?.getPrincipal().toString()}
                    </span>
                    <span className="text-xs text-zinc-500">Internet Identity</span>
                </div>
                <ChevronDown className="hidden size-4 text-zinc-500 sm:block" />
            </button>
            <ul className="dropdown-content menu z-1 mt-1 w-52 rounded-md bg-zinc-800 shadow-sm">
                <li>
                    <button onClick={copyPrincipal}>
                        <Copy className="mr-3 size-4" />
                        Copy Principal ID
                    </button>
                </li>
                <li>
                    <button onClick={logout} className="text-red-600">
                        <LogOut className="mr-3 size-4" />
                        Sign out
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ProfileDropdown;
