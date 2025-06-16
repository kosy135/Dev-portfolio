import React from "react";
export default function Artpage() {
  return (
    <div className="bg-[#2B2B2B] ">
      <div className="bg-[#2B2B2B] text-white px-30">
        <img
          src="public/Images/Avatar.png"
          alt="Avatar"
          className="position: relative bottom-15"
        />
        <h1 className="flex justify-between ">
          <h2 className="text-4xl"> Animakid</h2>{" "}
          <button className=" flex bg-[#A259FF] px-10 h-14 rounded-3xl pt-4">
            <img className="h-5" src="public/Images/Copy.png" alt="" />{" "}
            0xc0E3...B79C
          </button>{" "}
          <div>
            <button className=" flex rounded-3xl w-30 border border-[#A259FF] p-3">
              <img src="public/Images/Plus.png" alt="plus" />
              Follow
            </button>
          </div>
        </h1>
        <div className="flex gap-20">
          {" "}
          <div className="flex flex-col">
            <h2 className="text-2xl">250k+</h2> Volume{" "}
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl">50+</h2>NFTs sold
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl">3000+</h2>Followers
          </div>
        </div>
      </div>

      <div className="bg-[#2B2B2B] text-white px-30">
        <h1 className="text-[#858584]">Bio</h1>
        The Internet's Friendliest Designer Kid.
      </div>
      <div className="text-[#858584] bg-[#2B2B2B] px-30">Links</div>
      <img
        className="bg-[#2B2B2B] px-30"
        src="public/Images/Icons.png"
        alt=""
      />

      <div className="flex gap-19 text-white justify-between px-30">
        <h2 className="flex">Created <div className="bg-[#858584] rounded-full w-10 px-2">302</div></h2>
        <h2 className="flex">Owned <div className="bg-[#3B3B3B] rounded-full w-10 px-2">67</div></h2>
        <h2 className="flex">Collection <div className="bg-[#3B3B3B] rounded-full w-10 px-2">4</div></h2>
      </div>
      <div className="grid grid-cols-3 px-30">
        <div className="text-white pt-10 w-140">
          <img src="public/Images/bus.png" className="mr-20" alt="bus" />
          <h1 className=" text-xl ">Distant Galaxy</h1>
          Animakid
          <div className="flex gap-5">
            <div className="text-[#858584]">Price</div> 1.63 ETH
            <div className="text-[#858584]">Highest Bid</div> 0.33ETH
          </div>
        </div>
        <div className="text-white pt-10">
          <img src="public/Images/Sky.png" alt="sky" />
          <h1 className=" text-xl ">Life on Edena</h1>
          Animakid
          <div className="flex gap-5">
            <div className="text-[#858584]">Price</div> 1.63 ETH
            <div className="text-[#858584]">Highest Bid</div> 0.33ETH
          </div>
        </div>

        <div className="text-white pt-10">
          <img src="public/Images/Astro.png" alt="astro" />
          <h1 className=" text-xl ">Astrofiction</h1>
          Animakid
          <div className="flex gap-5">
            <div className="text-[#858584]">Price</div> 1.63 ETH
            <div className="text-[#858584]">Highest Bid</div> 0.33ETH
          </div>
        </div>

        <div className="text-white pt-10">
          <img src="public/Images/Image.png" alt="astro" />
          <h1 className=" text-xl ">Cryptocity </h1>
          Animakid
          <div className="flex gap-5">
            <div className="text-[#858584]">Price</div> 1.63 ETH
            <div className="text-[#858584]">Highest Bid</div> 0.33ETH
          </div>
        </div>

        <div className="text-white pt-10">
          <img src="public/Images/Dog.png" alt="astro" />
          <h1 className=" text-xl ">ColourfulDog 0542</h1>
          Animakid
          <div className="flex gap-5">
            <div className="text-[#858584]">Price</div> 1.63 ETH
            <div className="text-[#858584]">Highest Bid</div> 0.33ETH
          </div>
        </div>

        <div className="text-white pt-10">
          <img src="public/Images/Space.png" alt="space" />
          <h1 className=" text-xl ">Space Tales </h1>
          Animakid
          <div className="flex gap-5">
            <div className="text-[#858584]">Price</div> 1.63 ETH
            <div className="text-[#858584]">Highest Bid</div> 0.33ETH
          </div>
        </div>
        <div className="text-white pt-10">
          <img src="public/Images/Girl.png" alt="girl" />
          <h1 className=" text-xl ">Cherry Blossom Girl 037 </h1>
          Animakid
          <div className="flex gap-5">
            <div className="text-[#858584]">Price</div> 1.63 ETH
            <div className="text-[#858584]">Highest Bid</div> 0.33ETH
          </div>
        </div>

        <div className="text-white pt-10">
          <img src="public/Images/Robot.png" alt="robot" />
          <h1 className=" text-xl ">Dancing Robots 0987 </h1>
          Animakid
          <div className="flex gap-5">
            <div className="text-[#858584]">Price</div> 1.63 ETH
            <div className="text-[#858584]">Highest Bid</div> 0.33ETH
          </div>
        </div>

        <div className="text-white pt-10">
          <img src="public/Images/Monkey.png" alt="monkey" />
          <h1 className=" text-xl ">IceCream Ape </h1>
          Animakid
          <div className="flex gap-5">
            <div className="text-[#858584]">Price</div> 1.63 ETH
            <div className="text-[#858584]">Highest Bid</div> 0.33ETH
          </div>
        </div>
      </div>
    </div>
  );
}
