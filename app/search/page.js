import SearchInput from "@/components/home/SearchInput";
import NotFoundResult from "@/components/ui/icons/not-found-result";

export default async function Page({ searchParams }) {
    const { search } = await searchParams;
    const query = decodeURIComponent(search);
    const result = [{ id: 1, name: "پاستا" }].filter((i) => {
        return i.name === query;
    });
    const hasResult = result.length >= 1;
    return (
        <div className="mt-12  w-full">
            <div
                className={`flex items-center h-8 justify-center gap-1 ${
                    result.length >= 1
                        ? "text-2xl font-estedad-bold"
                        : "text-xl font-estedad-regular"
                }`}
            >
                {hasResult || <p>موردی با این مشخصات پیدا نکردیم!</p>}
                {hasResult && (
                    <div className="flex items-center justify-center gap-1">
                        <p>نتایج جستجو برای :</p>
                        <p className="text-primary">{query}</p>
                    </div>
                )}
            </div>

            <SearchInput className="w-full my-4 mx-auto max-w-70 sm:max-w-98 h-8 md:h-10" query={query} />

            {result.length === 0 && (
                <div className="flex sm:my-12 my-6 w-full justify-center items-center">
                    <NotFoundResult />
                </div>
            )}
            {result.length >= 1 && <div className="sm:h-110.25 h-16.25" />}
        </div>
    );
}
