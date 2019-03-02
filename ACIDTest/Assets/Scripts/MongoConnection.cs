using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class MongoConnection : MonoBehaviour
{
    [BsonIgnoreExtraElements]
    public class cubeProp
    {
        public ObjectId id { get; set; }
        public int x { get; set; }
        public int y { get; set; }
        public int z { get; set; }
        public int r { get; set; }
        public int g { get; set; }
        public int b { get; set; }
    }

    private MongoClient client;
    private MongoServer server;
    private MongoDatabase db;
    private MongoCollection<cubeProp> cubeProperties;
    
    void Start()
    {
        BsonDefaults.GuidRepresentation = GuidRepresentation.Standard;
        client = new MongoClient(new MongoUrl("mongodb://localhost:27017"));
        server = client.GetServer();
        server.Connect();
        db = server.GetDatabase("cubeData");
        cubeProperties = db.GetCollection<cubeProp>("cube");

        //if(db.CollectionExists("cube"))
        //{
        //    Debug.Log("I exist");
        //}

        //int collectionCount = cubeProperties.AsQueryable<cubeProp>().Count();

        //Debug.Log("Document count: " + collectionCount);

        foreach(cubeProp item in cubeProperties.AsQueryable<cubeProp>())
        {
            Debug.Log("ID: " + item.id.ToJson() + " X: " + item.x.ToJson() + " Y: " + item.y.ToJson() + " Z: " + item.z.ToJson() + " R: " + item.r.ToJson() + " G: " + item.g.ToJson() + " B: " + item.b.ToJson());
        }
    }
}
