import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItemType {
    label: string;
    href?: string;
}

interface ProductBreadcrumbProps {
    items: BreadcrumbItemType[];
}

export default function ProductBreadcrumb({ items }: ProductBreadcrumbProps) {
    return (
        <div className="container mx-auto px-4 -mt-10 relative z-20 w-full">
            <div className="bg-[#ECECEC66] rounded-2xl px-6 py-4 shadow-sm inline-block w-full">
                <Breadcrumb>
                    <BreadcrumbList>
                        {items.map((item, index) => (
                            <React.Fragment key={item.label}>
                                <BreadcrumbItem>
                                    {item.href ? (
                                        <BreadcrumbLink asChild>
                                            <Link href={item.href} className="text-black hover:text-black-200 text-base">
                                                {item.label}
                                            </Link>
                                        </BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbPage className="font-semibold text-black-200 text-base">
                                            {item.label}
                                        </BreadcrumbPage>
                                    )}
                                </BreadcrumbItem>
                                {index < items.length - 1 && <BreadcrumbSeparator />}
                            </React.Fragment>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
    );
}

import * as React from "react";
