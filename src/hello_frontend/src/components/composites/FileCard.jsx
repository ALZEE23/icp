import { MoreVertical } from "lucide-react";

import { FILE_CARD_TYPES } from "~/lib/constant";
import { cn } from "~/lib/utils";

const FileCard = ({ type, title, files, size }) => {
    const { icon: Icon, color } = FILE_CARD_TYPES[type] || FILE_CARD_TYPES.default;

    return (
        <article className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <header className="flex w-full items-center gap-4">
                <figure className={cn("flex items-center justify-center rounded-lg p-3", color)}>
                    <Icon className="size-6 text-white" />
                </figure>
                <h2 className="font-medium text-white">{title}</h2>
                <button
                    className="ml-auto self-start rounded-full p-1 transition-colors hover:bg-zinc-800"
                    aria-label="File options"
                >
                    <MoreVertical className="size-5 text-zinc-400" />
                </button>
            </header>

            <footer className="mt-4 flex items-end justify-between text-xs">
                <span className="text-zinc-500">{files} files</span>
                <span className="font-semibold text-blue-400">{size} GB</span>
            </footer>
        </article>
    );
};

export default FileCard;
