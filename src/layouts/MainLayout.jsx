const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col items-center z-10 main-container overflow-hidden">
      {children}
    </main>
  );
};

export default MainLayout;
