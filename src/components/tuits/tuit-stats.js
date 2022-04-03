import React from "react";
import SvgThumbsUpSolid  from "../icons/ThumbsUpSolid";
import SvgThumbsDownSolid from "../icons/ThumbsDownSolid";

const TuitStats = ({tuit, likeTuit = () => {}, dislikeTuit = () => {}}) => {
    return (
      <div className="row mt-2">
        <div className="col">
          <i className="far fa-message me-1"></i>
          {tuit.stats && tuit.stats.replies}
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
          {tuit.stats && tuit.stats.retuits}
        </div>
        <div className="col" >
          <div style={{marginRight: 10}}>
          <SvgThumbsUpSolid style={{marginRight: 5}} fillColor="#808080" onClick={() => likeTuit(tuit)
               }/>
          <span>
              {
                tuit.stats  && tuit.stats.likes > 0 
              }
              {
                tuit.stats  && tuit.stats.likes <= 0
              }
            {tuit.stats && tuit.stats.likes}
          </span>
          </div>
          <div>
          <SvgThumbsDownSolid style={{marginRight: 10}} fillColor="#808080" onClick={() => dislikeTuit(tuit)}/>
            <span >
                  {
                      tuit.stats  && tuit.stats.dislikes > 0
                  }
                {
                    tuit.stats  && tuit.stats.dislikes <= 0
                }
                {tuit.stats && tuit.stats.dislikes}
            </span>
          </div>
          
        </div>
        <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>
      </div>
    );
}
export default TuitStats;