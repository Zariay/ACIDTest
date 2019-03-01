using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using MongoDB.Driver;
using MongoDB.Bson;

public class MongoConnection : MonoBehaviour
{
    private MongoClient client;
    private MongoServer server;
    private MongoDatabase db;
    // Start is called before the first frame update
    protected void Start()
    {
        client = new MongoClient(new MongoUrl("mongodb://localhost:27017"));
        server = client.GetServer();
        server.Connect();
        db = server.GetDatabase("cubeData");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
