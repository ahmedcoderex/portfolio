function Background() {
  return (
    <>
      <span className="fixed top-14 left-11 w-44 h-44 rounded-full bg-yellow-500 blur-[100px] -z-10"></span>
      <span className="fixed bottom-20 right-10 w-64 h-64 rounded-full bg-blue-500 blur-[120px] -z-10"></span>
      <div className="fixed inset-0 backdrop-blur-[1px] -z-5"></div>
    </>
  );
}

export default Background;
