import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import FormSubmission from "./FormSubmission";
import { Form } from "react-hook-form";

const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function AppShell() {
    return (
        <>
            <div className="min-h-screen">
                <div className="py-10">
                    <main>
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            {/* Your content */}
                            <FormSubmission />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
