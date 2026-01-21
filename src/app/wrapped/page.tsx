import Link from "next/link";
import { WrappedContainer } from "./components/WrappedContainer";
import { mockWrappedData } from "./data/mockData";

export const metadata = {
    title: "Retrospectiva Lojacorr",
    description: "Sua retrospectiva em números.",
};

export default function Page() {
    return (
        <WrappedContainer data={mockWrappedData} />
    );
}
