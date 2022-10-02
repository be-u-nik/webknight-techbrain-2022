import Navbar from "../../components/navbar";

function Rewards() {
  const url = "https://tinyurl.com/3wcyvb7x";
  return (
    <div>
      <Navbar />
      <section className="pt-24 text-center mx-5 md:mx-auto">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="text-center px-[12px] py-0 md:px-5  md:py-2">
            Share this URL to earn rewards:{" "}
          </div>
          <div className="flex justify-center pt-2 md:pt-0">
            <input
              type="text"
              disabled
              value={url}
              className="text-center px-[12px] py-0  md:px-5 text-ellipsis md:py-2"
            />
            <a
              onClick={() => {
                // navigator.clipboard.writeText(this.state.textToCopy);
                navigator.clipboard.writeText(url);
              }}
              className="text-center px-[12px] py-0  md:px-5  md:py-2 cursor-pointer hover:text-blue-600"
            >
              copy
            </a>
          </div>
        </div>
        <h1 className="my-5 md:my-12 text-2xl">Your Rewards</h1>
        <div>
          <ul className="flex flex-col">
            <li>
              <div className="flex justify-around rounded-sm bg-grey-400 px-[12px] py-0 md:px-5  md:py-2">
                <p>Recieved from User2</p>
                <span>12:21 PM, 2 October 2022</span>
              </div>
            </li>
            <li>
              <div className="flex justify-around rounded-sm bg-grey-400 px-[12px] py-0 md:px-5  md:py-2">
                <p>Recieved from User2</p>
                <span>12:21 PM, 2 October 2022</span>
              </div>
            </li>
            <li>
              <div className="flex justify-around rounded-sm bg-grey-400 px-[12px] py-0 md:px-5  md:py-2">
                <p>Recieved from User2</p>
                <span>12:21 PM, 2 October 2022</span>
              </div>
            </li>
            <li>
              <div className="flex justify-around rounded-sm bg-grey-400 px-[12px] py-0 md:px-5  md:py-2">
                <p>Recieved from User2</p>
                <span>12:21 PM, 2 October 2022</span>
              </div>
            </li>
          </ul>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default Rewards;
