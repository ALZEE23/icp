import {
    Code,
    Database,
    Download,
    FileText,
    Folder,
    Globe,
    House,
    Image,
    Link,
    Lock,
    Music,
    Package,
    RefreshCw,
    Shield,
    Video,
    Zap,
} from "lucide-react";

export const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "Features", path: "#features" },
    { name: "How it works", path: "#how-it-works" },
];

export const FOOTER_LINKS = [
    {
        title: "Product",
        links: ["Features", "Integrations", "Pricing & Plans", "Changelog", "Our method"],
    },
    {
        title: "Company",
        links: ["About us", "Diversity & Inclusion", "Blog", "Careers", "Financial statements"],
    },
    {
        title: "Resources",
        links: ["Community", "Terms of service", "Report a vulnerability"],
    },
];

export const APP_FEATURES = [
    {
        icon: Shield,
        title: "Blockchain Security",
        description:
            "Your files are encrypted and secured using cutting-edge blockchain technology",
    },
    {
        icon: Globe,
        title: "Global Access",
        description: "Access your files from anywhere in the world, anytime you need them",
    },
    {
        icon: Lock,
        title: "Decentralized Storage",
        description: "No single point of failure. Your data is distributed across the network",
    },
];

export const HOW_IT_WORKS = [
    {
        icon: Code,
        title: "Instant Analytics",
        description: "Gain insights on user interactions with your website.",
    },
    {
        icon: Database,
        title: "Metadata",
        description: "Store and manage website metadata efficiently.",
    },
    {
        icon: RefreshCw,
        title: "Localization",
        description: "Adapt your content for global audiences.",
    },
    {
        icon: Zap,
        title: "Canonical URL",
        description: "Manage duplicate content with proper URL structures.",
    },
];

export const DASHBOARD_NAV_LINKS = [
    {
        icon: House,
        label: "Dashboard",
        link: "/dashboard",
    },
    {
        icon: Link,
        label: "Manage Your Links",
        link: "/managed-links",
    },
    {
        icon: Folder,
        label: "My Files",
        link: "/my-files",
    },
];

export const FILE_CARD_TYPES = {
    image: {
        icon: Image,
        color: "bg-green-500",
    },
    videos: {
        icon: Video,
        color: "bg-red-500",
    },
    audios: {
        icon: Music,
        color: "bg-blue-500",
    },
    documents: {
        icon: FileText,
        color: "bg-orange-500",
    },
    apps: {
        icon: Package,
        color: "bg-purple-500",
    },
    downloads: {
        icon: Download,
        color: "bg-indigo-500",
    },
    default: {
        icon: FileText,
        color: "bg-zinc-500",
    },
};
