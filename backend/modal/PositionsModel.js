const{model}= require("mongoose");
const{PositionsSchema}=require("../schemas/PositionsSchema");

const positionsModel= new model("position",PositionsSchema);//yahi position add hota hai file bankar mdb cluster

module.exports={positionsModel};