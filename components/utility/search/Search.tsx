export interface ISearch {
  sampleTextProp: string;
}

const Search: React.FC<ISearch> = ({ sampleTextProp }) => {
  return (
    <form className="flex flex-col items-center gap-y-5">
      <input
        type="text"
        className="rounded-full border-2 w-5/6 sm:w-96 h-12 px-3"
      />
      <div className="space-x-3">
        <button
          type="submit"
          className="border-0 p-2 px-6 bg-slate-100 rounded-md"
        >
          Google Search
        </button>
        <button
          type="submit"
          className="border-0 p-2 px-6 bg-slate-100 rounded-md"
        >
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
