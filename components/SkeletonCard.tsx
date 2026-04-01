export default function SkeletonCard() {
    return (
        <div className="bg-[#1e293b] p-4 rounded animate-pulse opacity-0 animate-fadeIn">

            <div className="h-5 bg-gray-400/30 rounded w-3/4 mb-3"></div>

            <div className="h-3 bg-gray-400/20 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-400/20 rounded w-5/6 mb-4"></div>

            <div className="flex justify-between">
                <div className="h-4 w-16 bg-gray-400/30 rounded"></div>
                <div className="h-4 w-16 bg-gray-400/30 rounded"></div>
            </div>

            <div className="h-8 bg-gray-400/30 rounded mt-4"></div>
        </div>
    );
}