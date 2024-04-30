import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";

const features = [
    {
        name: "Automated Video Replies",
        description:
            "Automate your outreach on video platforms like YouTube and Rumble. Set your targeted keywords and let our system handle posting replies that include your links, expanding your digital footprint and driving traffic to your site.",
        href: "#",
        icon: InboxIcon,
    },
    {
        name: "Team Collaboration",
        description:
            "Coordinate with your team to refine reply strategies and monitor performance. Our platform supports multiple users, allowing for a collaborative approach to managing your online presence and responses.",
        href: "#",
        icon: UsersIcon,
    },
    {
        name: "Content Moderation",
        description:
            "Ensure the quality and relevance of your automated replies with advanced spam filtering and moderation tools. Protect your brand’s reputation by maintaining high standards for the messages associated with your links.",
        href: "#",
        icon: TrashIcon,
    },
];

export default function Features() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Powerful Features for Effective Online Engagement
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Our tools are designed to enhance your visibility and
                        impact across video platforms, facilitating automated
                        interactions that drive audience engagement and site
                        traffic.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                                        <feature.icon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p className="flex-auto">
                                        {feature.description}
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
