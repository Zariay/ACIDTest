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
    private MongoClient client;
    private MongoServer server;
    private MongoDatabase db;
    public MongoCollection<cubeProps> cubeProperties;
    
    void Start()
    {
        BsonDefaults.GuidRepresentation = GuidRepresentation.Standard;
        client = new MongoClient(new MongoUrl("mongodb://localhost:27017"));
        server = client.GetServer();
        server.Connect();
        db = server.GetDatabase("cubeData");
        cubeProperties = db.GetCollection<cubeProps>("cube");

        //Check if collection exists within the DB
        //if(db.CollectionExists("cube"))
        //{
        //    Debug.Log("I exist");
        //}

        //check number of documents in collection
        //int collectionCount = cubeProperties.AsQueryable<cubeProp>().Count();

        //Debug.Log("Document count: " + collectionCount);

        //print each value for document
        //foreach (cubeProps item in cubeProperties.AsQueryable<cubeProps>())
        //{
        //    Debug.Log("ID: " + item.id.ToJson() + " X: " + item.x.ToJson() + " Y: " + item.y.ToJson() + " Z: " + item.z.ToJson() + " R: " + item.r.ToJson() + " G: " + item.g.ToJson() + " B: " + item.b.ToJson());
        //}
    }
}

