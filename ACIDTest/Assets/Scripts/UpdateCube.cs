using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

public class UpdateCube : MonoBehaviour
{
    [SerializeField]
    private MongoConnection mongoCon;

    private Color color;
    // Start is called before the first frame update
    void Start()
    {
        mongoCon.GetComponent<MongoConnection>();
    }

    // Update is called once per frame
    void Update()
    {
        InvokeRepeating("changeCube", 0, 1.0f);
    }

    void changeCube()
    {
        foreach (cubeProps item in mongoCon.cubeProperties.AsQueryable<cubeProps>())
        {
            this.gameObject.transform.Rotate(item.x, item.y, item.z);
            color = new Color(item.r, item.g, item.b);
        }
    }
}