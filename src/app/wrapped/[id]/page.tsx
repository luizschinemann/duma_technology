import { notFound } from "next/navigation";
import { WrappedContainer } from "../components/WrappedContainer";
import { getWrappedData } from "../data/mockData";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const data = getWrappedData(params.id);
    if (!data) return { title: "Retrospectiva Lojacorr" };
    return {
        title: `Retrospectiva ${data.year} - ${data.brokerName}`,
    };
}

export default function WrappedPage({ params }: { params: { id: string } }) {
    const data = getWrappedData(params.id);

    if (!data) {
        return notFound();
    }

    return <WrappedContainer data={data} />;
}
