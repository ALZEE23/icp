import { Code, Database, Globe, Lock, RefreshCw, Shield, Zap } from "lucide-react";

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
