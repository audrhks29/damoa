import SearchBox from "@/components/search/SearchBox";

export default function Home() {
  return (
    <main className="inner h-screen flex flex-col items-center justify-center">
      <div className="text-center text-6xl">DAMOA</div>
      <SearchBox
        styleProp={{ marginTop: 20 }} />
    </main>
  );
}


