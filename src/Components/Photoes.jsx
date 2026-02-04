import { useState } from "react";

const Photos = () => {
  const [search, setSearch] = useState("");

  const match = (text) =>
    text.toLowerCase().includes(search.toLowerCase());

  return (
    <div>
      <h2>Event Gallery</h2>
      <input
        type="text"
        placeholder="Search events (wedding, birthday, corporate)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "300px",
          marginBottom: "20px",
        }}
      />
      {match("wedding") && (
        <>
          <h3>Wedding Events</h3>
          <div>
            <img src="https://symphonyevents.com.au/wp-content/uploads/2021/08/Wedding-Planner-Sydney-Banner.jpg" width="300" height="300" style={{ margin: "10px" }} />
            <img src="https://tse1.mm.bing.net/th/id/OIP.c_Zt8EivlwJ-1YmR5esjRQHaE7" width="300" height="300" style={{ margin: "10px" }} />
            <img src="https://d1zpvjny0s6omk.cloudfront.net/media/fileupload/2015/12/30/1_mecca-daniels_J-Cogliandro-Photography.jpg" width="300" height="300" style={{ margin: "10px" }} />
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20240101/pngtree-wedding-stage-decoration-with-flowers-image_15562234.jpg" width="300" height="300" style={{ margin: "10px" }} />
          </div>
        </>
      )}

     
      {match("birthday") && (
        <>
          <h3>Birthday Parties</h3>
          <div>
            <img src="https://i.pinimg.com/originals/b4/ba/3c/b4ba3c74118180a7e7cf17887f0478da.jpg" width="300" height="300" style={{ margin: "10px" }} />
            <img src="https://th.bing.com/th/id/OIP.bpWaAIFK-ZiL56jeSiVgowHaE8" width="300" height="300" style={{ margin: "10px" }} />
            <img src="https://marketplace.canva.com/EAE75q-RbBs/1/0/800w/canva-happy-birthday-QbWIyKVd26o.jpg" width="300" height="300" style={{ margin: "10px" }} />
            <img src="https://th.bing.com/th/id/OIP.6r2jDpuUYk2JIutj7-2XHgHaDg" width="300" height="300" style={{ margin: "10px" }} />
          </div>
        </>
      )}

     
      {match("corporate") && (
        <>
          <h3>Corporate Party</h3>
          <div>
            <img src="https://tse4.mm.bing.net/th/id/OIP.OoDj7AE6PvEDYRjs1hCO0gHaEW" width="300" height="300" style={{ margin: "10px" }} />
            <img src="https://images.squarespace-cdn.com/content/v1/5ed7b900cd5c387f0d6d2534/1612878918146-EBICGXCDZX928OJEG7P2/London+wedding+planner" width="300" height="300" style={{ margin: "10px" }} />
            <img src="https://wp-media-partyslate.imgix.net/2021/08/photo-7d0d466f-4c40-4db5-8514-fca7a66154ae.jpeg" width="300" height="300" style={{ margin: "10px" }} />
            <img src="https://tse2.mm.bing.net/th/id/OIP.WrlPknBwzC14YW3NFEPbBQHaE-" width="300" height="300" style={{ margin: "10px" }} />
          </div>
        </>
      )}
    </div>
  );
};

export default Photos;
