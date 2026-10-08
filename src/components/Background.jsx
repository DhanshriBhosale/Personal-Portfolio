export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-[-150px] top-[20%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[130px]" />
      <div className="absolute bottom-[-150px] left-[25%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.06)_1px,transparent_0)] [background-size:40px_40px]" />
    </div>
  );
}