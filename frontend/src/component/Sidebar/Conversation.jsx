import image from "../../assets/images/download.png";

const Conversation = () => {
  return (
    <>
      <div className="flex items-center cursor-pointer hover:bg-blue-500 px-2 rounded-sm gap-7 border-b py-2 border-slate-400">
        <div className="avatar avatar-online">
          <div className="w-10 rounded-full">
            <img className="" src={image} alt="" />
          </div>
        </div>
        <h2 className="font-semibold text-lg">Md Murad</h2>
      </div>
    </>
  );
};

export default Conversation;
