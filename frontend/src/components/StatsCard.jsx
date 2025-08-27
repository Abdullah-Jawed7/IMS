function StatsCard({title , number}) {
  return (
    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#cedbe8]">
      <p className="text-[#0d141c] text-base font-medium leading-normal">
        {title}
      </p>
      <p className="text-[#0d141c] tracking-light text-2xl font-bold leading-tight">
        {number}
      </p>
    </div>
  );
}

export default StatsCard;
