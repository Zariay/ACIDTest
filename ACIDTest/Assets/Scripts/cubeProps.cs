using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

[BsonIgnoreExtraElements]
public class cubeProps
{ 
    public ObjectId id { get; set; }
    public int x { get; set; }
    public int y { get; set; }
    public int z { get; set; }
    public int r { get; set; }
    public int g { get; set; }
    public int b { get; set; }
}
