import React, { useEffect, useState } from "react";
import "./style.css";


export default function MemoryGame() {
  const [pickedCard, setpickedCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const imageCard = [ 
    {id:1, name:"luffy", src:"https://pbs.twimg.com/profile_images/1445379912043581440/pNQtxzP5_400x400.jpg", },
    {id:2,name:"sengoku", src:"https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSeWOqw-ybNDKRE4EOgMpFBCkm1HFzpJ_i5Pl9zut1M4fcNmStEGOsAA-rgAQ6YQQqL-Qw%26usqp%3DCAU"},
    {id:3,name:"conan", src:"https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTIdSKibR-5xYPNa8XVex2Mv44jsIS_GS9vhPaAcWjtOXC1O88wny_s4XY3ZBjsmTc6x4g%26usqp%3DCAU"},
    {id:4, name:"naruto", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvOb2Bb9hrZi8QZZY16A1rRiH6ZXgyDrIWjIHPnDErJaisqqw_z5syysCCxRP8eLg858&usqp=CAU"},
    {id:5, name:"kizaru",src:"https://dev.mangajam.com/wp-content/uploads/part411/how_draw_admiral-kizaru_one_piece_11.jpg"},
    {id:6, name:"akainu",src:"http://www.onepiecepodcast.com/wp-content/uploads/2014/12/Akainu-300x193.jpeg"},

]





  const towCopid = [...imageCard, ...imageCard];




  function toggle(i) {
    setpickedCard((opened) => [...opened, i]);
  }






  useEffect(() => {
    
    const firstPick = towCopid[pickedCard[0]];
    const secondPick = towCopid[pickedCard[1]];
    if (secondPick && firstPick.name === secondPick.name) {
      setMatched([...matched, firstPick.name]);
    }
    if (pickedCard.length === 2) setTimeout(() => setpickedCard([]), 1000);
  }, [pickedCard]);





  return (
    <div className="x">
     <h1 className="header">Memory game</h1> 
      <div className="cards">
     
        {towCopid.map((imageCard, i) => {


          let toggled = false;
          if (pickedCard.includes(i)) toggled = !toggled;
          if (matched.includes(imageCard.name)) toggled = !toggled;
          return (
            <div
              className={`one-card ${toggled ? 
              "pick" 
              : ""} `}
              key={i}
              onClick={() => toggle(i)}
            >
              <div className="inside">
                <div className="front">
                  <img
                    src={imageCard.src}
                    alt=""
                    width="100"
                  />
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
      
      <h2 className="made">By: Mayouf , Oudah , Najah and Ahlam</h2>
    </div>
  );
}