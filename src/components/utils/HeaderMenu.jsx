const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="p-8">
        <h3 className="text-center text-2xl text-zinc-50 hover:text-blue-700 underline">{title}</h3>
      </div>
    </div>
  );
};

export default HeaderMenu;
