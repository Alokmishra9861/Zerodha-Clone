const {model}=require("mongoose");

const{positionSchema}=require("../schemas/positionsSchema");

const positionModel=new model("position",positionSchema);

module.exports={positionModel};